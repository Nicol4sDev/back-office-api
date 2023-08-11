import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/entities/user.entity';
import { CriptoModule } from '../cripto/cripto.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema
      }
    ]),
    CriptoModule
  ]
})
export class SeedModule {}
