import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateCustomersDto {
  @IsNumberString()
  id: number;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  name: string;
}
