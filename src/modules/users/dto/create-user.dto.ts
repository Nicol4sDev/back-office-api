import {
    IsString,
    IsNotEmpty,
  } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
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
