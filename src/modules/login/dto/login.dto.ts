import {
    IsString,
  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @IsString()
    @ApiProperty({
      type: String,
      description: 'This is a required property',
    })
    readonly email: string;
    
    @IsString()
    @ApiProperty({
      type: String,
      description: 'This is a required property',
    })
    readonly password: string;
}
