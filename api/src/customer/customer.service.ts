import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const response = await this.customerRepository.save(createCustomerDto);
    return response;
  }

  async findAll() {
    const response = await this.customerRepository.find();
    return response;
  }

  async findOneByEmail(email: string, cache?: boolean) {
    const response = await this.customerRepository.findOne({
      where: { email },
      cache: cache,
    });
    return response;
  }

  async findOneById(id: number) {
    const response = await this.customerRepository.findOne({
      where: { id },
    });
    if (!response) {
      throw new NotFoundException();
    }
    return response;
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const response = await this.customerRepository.update(
      id,
      updateCustomerDto,
    );
    return response;
  }

  async remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
