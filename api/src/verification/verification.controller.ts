import { Body, Controller, Post } from '@nestjs/common';
import { VerificationService } from './verification.service';

@Controller('verification')
export class VerificationController {
  constructor(private readonly verificationService: VerificationService) {}

  @Post('send-code')
  sendCustomerVerificationCode(@Body() { email }: { email: string }) {
    const response =
      this.verificationService.sendCustomerVerificationCode(email);
    return response;
  }

  @Post()
  verifyCustomer(@Body() { email, code }: { email: string; code: string }) {
    const response = this.verificationService.verifyCustomer(email, code);
    return response;
  }
}
