import {
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash, verify } from 'argon2';
import { CustomerService } from 'src/customer/customer.service';
import { EmployeeService } from 'src/employee/employee.service';
import { IPayload } from './types/payload.type';
import { CreateCustomerDto } from 'src/customer/dto/create-customer.dto';
import { CreateEmployeeDto } from 'src/employee/dto/create-employee.dto';
import { Role } from './types/permission.type';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import { ResetPasswordDto } from './dto/reset-password.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly redis: Cache,
    private customerService: CustomerService,
    private employeeService: EmployeeService,
    private jwtService: JwtService,
  ) {}

  async registerCustomer(createCustomerDto: CreateCustomerDto) {
    const alreadyExists = await this.customerService.findOneByEmail(
      createCustomerDto.email,
      false,
    );
    if (alreadyExists) {
      throw new ConflictException({
        email: 'User with such email already exists',
      });
    }
    const customer = await this.customerService.create({
      ...createCustomerDto,
      password: await hash(createCustomerDto.password),
    });
    const { password, ...response } = customer;
    return {
      ...response,
      auth_token: this.jwtService.sign({
        id: customer.id,
        email: customer.email,
        role: Role.Customer,
      }),
    };
  }

  async validateCustomer(email: string, password: string) {
    const customer = await this.customerService.findOneByEmail(email, false);
    if (!customer) {
      return null;
    }
    const isPasswordMatch = await verify(customer.password, password);
    if (isPasswordMatch) {
      const { password, ...result } = customer;
      return result;
    }
    return null;
  }

  async registerEmployee(createEmployeeDto: CreateEmployeeDto) {
    const employee = await this.employeeService.create({
      ...createEmployeeDto,
      password: await hash(createEmployeeDto.password),
    });
    const { password, ...response } = employee;
    return {
      ...response,
      auth_token: this.jwtService.sign({
        email: createEmployeeDto.email,
        role: Role.Admin,
      }),
    };
  }

  async validateEmployee(email: string, password: string) {
    const employee = await this.employeeService.findOneByEmail(email);
    if (!employee) {
      return null;
    }
    const isPasswordMatch = await verify(employee.password, password);
    if (isPasswordMatch) {
      const { password, ...result } = employee;
      return result;
    }
    return null;
  }

  login(payload: IPayload, role: Role) {
    return {
      ...payload,
      auth_token: this.jwtService.sign({ ...payload, role: role }),
    };
  }

  loginCustomer(payload: IPayload) {
    const response = this.login(
      {
        email: payload.email,
      },
      Role.Customer,
    );
    return response;
  }

  loginEmployee(payload: IPayload) {
    const response = this.login({ email: payload.email }, Role.Admin);
    return response;
  }

  async resetCustomerPassword({ reset_token, newPassword }: ResetPasswordDto) {
    const { email } = this.jwtService.verify<{ email: string }>(reset_token);

    console.log(email);

    const resetTokenId = `reset-password:customer:${email}`;
    const cachedToken = await this.redis.get<string>(resetTokenId);

    if (!cachedToken || cachedToken !== reset_token) {
      throw new ForbiddenException();
    }

    const customer = await this.customerService.findOneByEmail(email, false);
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }

    await this.customerService.update(customer.id, {
      password: await hash(newPassword),
    });
    return this.loginCustomer({ email: customer.email });
  }
}
