import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "./auth.controller";
import { AuthRespository } from "./auth.repository";
import { AuthService } from "./auth.service";

@Module({
    imports:[
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.register({
            secret: 'topSecret51',
            signOptions:{
                expiresIn: 3600
            }
        }),
        TypeOrmModule.forFeature([AuthRespository]),],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule{}