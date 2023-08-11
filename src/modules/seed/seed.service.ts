import { Injectable } from '@nestjs/common';
import { fakeUsers } from './fake-users';
import { v4 as uuidv4 } from 'uuid';
import { CriptoService } from '../cripto/cripto.service';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../users/entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly criptoService: CriptoService
  ){}
  
  async executeSeed() {
    try {
      for (const user of fakeUsers.users) {
        const fakeUsersDb = {
          id: uuidv4(),
          email: user.email.toLowerCase(),
          password: await this.criptoService.encryptPassword(user.password)
        };
        await this.userModel.create(fakeUsersDb);
      }
      return 'Seed executed'
    } catch (error) {
      console.log(error)
    }
   
  }
}
