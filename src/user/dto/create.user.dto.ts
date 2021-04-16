import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Username should not be empty' })
  name: string;

  age: number;
  job: string;
}
