import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { hash, verify } from 'argon2';
import { CustomerService } from 'src/customer/customer.service';
import { EmployeeService } from 'src/employee/employee.service';
import { IPayload } from './types/payload.type';
import { CreateCustomerDto } from 'src/customer/dto/create-customer.dto';
import { CreateEmployeeDto } from 'src/employee/dto/create-employee.dto';
import { Role } from './types/permission.type';

@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomerService,
    private employeeService: EmployeeService,
    private jwtService: JwtService,
  ) {}

  async registerCustomer(createCustomerDto: CreateCustomerDto) {
    const alreadyExists = await this.customerService.findOneByEmail(
      createCustomerDto.email,
    );
    if (!!alreadyExists) {
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
        id: createCustomerDto.id,
        email: createCustomerDto.email,
        role: Role.Customer,
      }),
    };
  }

  async validateCustomer(email: string, password: string) {
    const customer = await this.customerService.findOneByEmail(email);
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

  async login(payload: IPayload, role: Role) {
    return {
      ...payload,
      auth_token: this.jwtService.sign({ ...payload, role: role }),
    };
  }

  async loginCustomer(payload: IPayload) {
    const response = await this.login(
      {
        email: payload.email,
      },
      Role.Customer,
    );
    return response;
  }
  async loginEmployee(payload: IPayload) {
    const response = this.login({ email: payload.email }, Role.Admin);
    return response;
  }
}
