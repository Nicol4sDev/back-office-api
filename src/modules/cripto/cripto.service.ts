import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CriptoService {
    async encryptPassword(password){
        const salt: number = 10;
        const hash: string = await bcrypt.hash(password,salt);
        return hash;
    }

    async comparePasswords(
        userInputPassword: string,
        hashedPassword: string,
      ){
        const isMatch: boolean = await bcrypt.compare(userInputPassword, hashedPassword);
        return isMatch;
      }
}
