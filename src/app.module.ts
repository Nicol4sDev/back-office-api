import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CriptoModule } from './modules/cripto/cripto.module';

@Module({
  imports: [UsersModule, CriptoModule,
   MongooseModule.forRoot('mongodb://localhost:27017/back-office-mongo')
  ],
  controllers: [AppController],
})
export class AppModule {}
