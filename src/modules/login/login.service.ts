import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { CriptoService } from '../cripto/cripto.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/entities/user.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectModel(User.name)
    private readonly loginModel: Model<User>,
    private readonly criptoService: CriptoService
  ){}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.loginModel.findOne({ email });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    
    const isPasswordCorrect = await this.criptoService.comparePasswords(password, user.password);

    if (!isPasswordCorrect) {
      throw new NotFoundException('Invalid credentials');
    }
    else{
      return 'Loged in'
    }
  }
}
