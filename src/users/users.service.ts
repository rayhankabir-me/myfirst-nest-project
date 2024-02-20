import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private userLists = [
    {
      name: 'Rayhan Kabir',
      id: 2,
      role: 'Admin',
    },
    {
      name: 'Ashikur Rahman',
      id: 3,
      role: 'Instructor',
    },
  ];
  create(user) {
    this.userLists.push(user);
    return this.userLists;
  }

  findAll() {
    return this.userLists;
  }

  findOne(id: number) {
    return this.userLists.find((element) => element.id == id);
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
