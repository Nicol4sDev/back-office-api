import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as uuidv4 } from 'uuid';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CriptoService } from '../cripto/cripto.service';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly criptoService: CriptoService
  ){}

  async create(createUserDto: CreateUserDto) {
    let user : any = {
      id: uuidv4(),
      email: createUserDto.email.toLocaleLowerCase(),
      password: this.criptoService.encryptPassword(createUserDto.password),
    }
    return user = await this.userModel.create(createUserDto)
  }
}
