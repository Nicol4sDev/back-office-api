import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { CriptoModule } from '../cripto/cripto.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginSchema } from './entities/login.entity';
import { CriptoService } from '../cripto/cripto.service';
import { User } from '../users/entities/user.entity';

@Module({
  controllers: [LoginController],
  providers: [LoginService, CriptoService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: LoginSchema }]),
    CriptoModule
  ],
})
export class LoginModule {}
