import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('login')
@ApiTags('Login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'User loged in successfully'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  login(@Body() createLoginDto: LoginDto) {
    return this.loginService.login(createLoginDto);
  }
}
