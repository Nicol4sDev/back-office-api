import {
    IsString,
    IsNotEmpty,
  } from 'class-validator';

export class CreateUserDto {
    @IsString()
    readonly email: string;
    
    @IsString()
    readonly password: string;
}
