import { Module } from '@nestjs/common';
import { CriptoService } from './cripto.service';

@Module({
  controllers: [],
  providers: [CriptoService],
  exports: [CriptoService]
})
export class CriptoModule {}
