import { Module } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { VerificationController } from './verification.controller';
import { CustomerModule } from 'src/customer/customer.module';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [CustomerModule, EmailModule],
  providers: [VerificationService],
  controllers: [VerificationController],
})
export class VerificationModule {}
