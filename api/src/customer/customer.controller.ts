import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { OrderService } from 'src/order/order.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { Action, Resource } from 'src/auth/types/permission.type';
import { UseAuth } from 'src/auth/decorators/auth.decorator';
import { Customer } from 'src/entities/customer.entity';

@Controller('customer')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly orderService: OrderService,
  ) {}

  @Get(':id')
  @UseAuth(
    {
      action: Action.Read,
      resource: Resource.CustomerProfile,
      possession: 'own',
    },
    (customer: Customer) => customer.id,
  )
  async getProfileById(@Param('id') id: string) {
    const { password, ...response } =
      await this.customerService.findOneById(+id);
    return response;
  }

  @Get(':id/order')
  @UseGuards(JwtGuard)
  getCustomerOrders(@Param('id') id: string) {
    const response = this.orderService.findAllByCustomerId(+id);
    return response;
  }
}
