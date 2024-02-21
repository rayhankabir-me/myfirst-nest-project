import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  customers = [
    {
      id: 1,
      email: 'rayhan@gmail.com',
      password: 'abc',
    },
    {
      id: 2,
      email: 'ashikur@gmail.com',
      password: 'abc',
    },
  ];

  getCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }
}
