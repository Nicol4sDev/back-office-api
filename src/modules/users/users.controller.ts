import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'User created successfully'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  createUser(@Body() createCarDto: CreateUserDto) {
    return this.usersService.create(createCarDto);
  }
}
