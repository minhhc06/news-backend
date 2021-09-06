import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthRepository } from "./auth.repository";
import { JwtPayload } from "./jwt-payload.interface";
import { Users } from "./user.entitys";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){
    constructor(
        @InjectRepository(AuthRepository)
        private authRepository: AuthRepository,
    ){
        super({
            secretOrKey: 'topSecret51',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    async validate(payload: JwtPayload): Promise<Users>{
        const { username } = payload;
        const user: Users = await this.authRepository.findOne({ username });
        if(!user){
            throw new UnauthorizedException();
        }

        return user;

    }

}