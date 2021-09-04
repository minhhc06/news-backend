import {Body, Controller, Post, Req, UseGuards} from '@nestjs/common';
import { AuthService } from "./auth.service";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { serialize, deserialize } from 'class-transformer';


@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Post('/signup')
    async signUp(@Body() authCredentialsDto: AuthCredentialsDto){
        const data = await this.authService.signUp(authCredentialsDto);

        return {
          status: 200,
          message: 'ok',
          data: data
        };
    }

    @Post('/signin')
    async signIn(@Body() authCredentialsDto: AuthCredentialsDto)  {
        // const user = serialize(await this.signIn(authCredentialsDto));

        const token  =  await this.authService.signIn(authCredentialsDto);

        // return this.authService.signIn(authCredentialsDto);

        return {
          status: 200,
          message: 'ok',
          data: token
        };
    }
}