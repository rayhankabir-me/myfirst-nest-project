import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CustomersService } from './customers.service';
import { CreateCustomersDto } from './dto/CreateCustomers.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get(':id')
  findCustomerById(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const customer = this.customersService.getCustomerById(id);
    if (customer) {
      res.send(customer);
    } else {
      res.status(400).send({ msg: 'customer not found' });
    }
  }

  //nest js way
  @Get('/search/:id')
  searchCustomer(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.getCustomerById(id);
    if (customer) {
      return customer;
    } else {
      throw new HttpException('Customer Not Found', HttpStatus.BAD_GATEWAY);
    }
  }

  //get all customers
  @Get()
  getCustomers() {
    return this.customersService.getAllCustomers();
  }

  //posts request using dto
  @Post()
  createCustomer(@Body() createCustomersDto: CreateCustomersDto) {
    return this.customersService.createCustomer(createCustomersDto);
  }
}
