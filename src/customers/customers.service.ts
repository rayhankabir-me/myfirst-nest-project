import { Injectable } from '@nestjs/common';
import { CreateCustomersDto } from './dto/CreateCustomers.dto';
import { Customer } from './types/Customers';

@Injectable()
export class CustomersService {
  customers: Customer[] = [
    {
      id: 1,
      email: 'rayhan@gmail.com',
      name: 'Rayhan Kabir',
    },
    {
      id: 2,
      email: 'ashikur@gmail.com',
      name: 'Ashikur Rahman',
    },
  ];

  getCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  getAllCustomers() {
    return this.customers;
  }

  createCustomer(createCustomersDto: CreateCustomersDto) {
    return this.customers.push(createCustomersDto);
  }
}
