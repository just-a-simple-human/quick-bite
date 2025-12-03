import { Module } from '@nestjs/common';
import { VerificationService } from './verification.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Verification } from 'src/entities/verification.entity';
import { VerificationController } from './verification.controller';
import { CustomerModule } from 'src/customer/customer.module';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Verification]),
    CustomerModule,
    EmailModule,
  ],
  providers: [VerificationService],
  controllers: [VerificationController],
})
export class VerificationModule {}
