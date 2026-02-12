import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CustomerModule } from 'src/customer/customer.module';
import { EmployeeModule } from 'src/employee/employee.module';
import { PassportModule } from '@nestjs/passport';
import { LocalCustomerStrategy } from './strategies/local-customer.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalEmployeeStrategy } from './strategies/local-employee.strategy';

@Module({
  imports: [CustomerModule, EmployeeModule, PassportModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalCustomerStrategy,
    LocalEmployeeStrategy,
    JwtStrategy,
  ],
})
export class AuthModule {}
