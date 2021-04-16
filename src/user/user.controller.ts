import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Res() res, @Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
    return res.json({ message: 'Created User Successfully' });
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
