import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthRepository } from "./auth.repository";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from "./jwt-payload.interface";
import { Console } from "console";

@Injectable()
export class AuthService{
    constructor(
        @InjectRepository(AuthRepository)
        private usersRepository: AuthRepository,
        private jwtService: JwtService,
    ){}

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.usersRepository.createUser(authCredentialsDto);
    }

    async signIn(authCredentialsDto: AuthCredentialsDto) : Promise<{accessToken: string}>{
        const {username, password} = authCredentialsDto;
        const user = await this.usersRepository.findOne({username});
        
        console.log(`salt ${user.username}`);

        if(user && (await bcrypt.compare(password, user.password))){
            const payload: JwtPayload = {username};
            const accessToken: string = await this.jwtService.sign(payload);
            return {accessToken};
        }else{
            throw new UnauthorizedException('Please check your login credentials');
        }
    }

}