import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { randomInt } from 'crypto';
import { hash, verify } from 'argon2';
import { CustomerService } from 'src/customer/customer.service';
import { EmailService } from 'src/email/email.service';
import { renderFile } from 'pug';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class VerificationService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly redis: Cache,
    private readonly customerService: CustomerService,
    private readonly emailService: EmailService,
    private readonly jwtService: JwtService,
  ) {}

  async sendCustomerOtp(email: string) {
    const attemptsId = `otp:customer:${email}:attempts`;
    const codeId = `otp:customer:${email}`;

    const code = randomInt(100000, 1000000).toString();
    const hashedCode = await hash(code);

    await Promise.all([
      this.redis.set(codeId, hashedCode, 300000),
      this.redis.set(attemptsId, 0, 3600000),
    ]);

    const customer = await this.customerService.findOneByEmail(email);

    if (customer) {
      this.emailService.sendEmail(
        customer.email,
        renderFile('./src/mail-templates/verification.pug', {
          customer,
          code,
        }),
      );
    }
  }

  async verifyCustomerOtp(email: string, code: string) {
    const attemptsId = `otp:customer:${email}:attempts`;
    const codeId = `otp:customer:${email}`;

    const [hashedCode, attempts = 0] = await Promise.all([
      this.redis.get<string>(codeId),
      this.redis.get<number>(attemptsId),
    ]);

    if (attempts > 5) {
      throw new BadRequestException('Too many attempts. Please, try later');
    }

    if (!hashedCode) {
      throw new BadRequestException('No otp sent!');
    }

    const isMatching = await verify(hashedCode, code);
    if (isMatching) {
      await Promise.all([this.redis.del(codeId), this.redis.del(attemptsId)]);
    } else {
      await this.redis.set(attemptsId, attempts + 1, 300000);
    }
    return isMatching;
  }

  async verifyCustomerRegistration(email: string, code: string) {
    const customer = await this.customerService.findOneByEmail(email);
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

    const verified = await this.verifyCustomerOtp(email, code);
    if (!verified) {
      throw new UnprocessableEntityException('Wrong OTP. Please, try again');
    }

    await this.customerService.update(customer.id, { verifiedAt: new Date() });
    return { message: 'Customer verfied' };
  }

  async verifyCustomerResetPassword(email: string, code: string) {
    const verified = await this.verifyCustomerOtp(email, code);

    if (!verified) {
      throw new UnprocessableEntityException('Wrong OTP. Please, try again');
    }

    const token = this.jwtService.sign({ email }, { expiresIn: '1h' });
    const resetTokenId = `reset-password:customer:${email}`;
    await this.redis.set(resetTokenId, token, 3600000);

    return { reset_token: token };
  }
}
