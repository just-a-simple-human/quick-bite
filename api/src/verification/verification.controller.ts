import { Body, Controller, Post } from '@nestjs/common';
import { VerificationService } from './verification.service';

@Controller('verification')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @Post('send-code')
  sendCustomerVerificationCode(@Body() { email }: { email: string }) {
    const response = this.verificationService.sendCustomerOtp(email);
    return response;
  }

  @Post('registration')
  verifyCustomerRegistration(
    @Body() { email, code }: { email: string; code: string },
  ) {
    const response = this.verificationService.verifyCustomerRegistration(
      email,
      code,
    );
    return response;
  }

  @Post('reset-password')
  verifyCustomerResetPassword(
    @Body() { email, code }: { email: string; code: string },
  ) {
    const response = this.verificationService.verifyCustomerResetPassword(
      email,
      code,
    );
    return response;
  }
}
