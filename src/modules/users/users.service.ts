import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const user : User = {
      id: uuidv4(),
      email: createUserDto.email,
      password: createUserDto.password,
    }
    return user;
  }
}
