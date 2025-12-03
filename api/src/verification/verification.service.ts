import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Verification } from 'src/entities/verification.entity';
import { Repository } from 'typeorm';
import { randomInt } from 'crypto';
import { hash, verify } from 'argon2';
import { CustomerService } from 'src/customer/customer.service';
import { EmailService } from 'src/email/email.service';
import { renderFile } from 'pug';
import { constrainedMemory } from 'process';

@Injectable()
export class VerificationService {
  constructor(
    @InjectRepository(Verification)
    private readonly verificationRepository: Repository<Verification>,
    private readonly customerService: CustomerService,
    private readonly emailService: EmailService,
  ) {}

  async sendCustomerVerificationCode(email: string) {
    const customer = await this.customerService.findOneByEmail(email);
    if (!customer) throw new NotFoundException('Customer not found');

    const code = randomInt(100000, 1000000).toString();
    const hashedCode = await hash(code);
    this.verificationRepository.save({
      customer,
      code: hashedCode,
      verified: false,
    });
    this.emailService.sendEmail(
      customer.email,
      renderFile('./src/mail-templates/verification.pug', {
        customer,
        code,
      }),
    );
  }
  async verifyCustomer(email: string, code: string) {
    const customer = await this.customerService.findOneByEmail(email);
    if (!customer || !customer.verification) throw new NotFoundException();

    if (customer.verification.verified)
      throw new BadRequestException('Account already verified');

    const isMatching = verify(customer.verification.code, code);
    if (!isMatching) throw new BadRequestException('Wrong OTP');

    return this.verificationRepository.update(customer.verification.id, {
      verified: true,
    });
  }
}
