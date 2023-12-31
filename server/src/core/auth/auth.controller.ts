import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { AuthResponse, UserID } from 'src/common/decorators';
import { JwtGuard, LocalGuard } from './guards';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  signUp(@Body() body: RegisterDto): Promise<any> {
    return this.authService.register(body);
  }

  @UseGuards(LocalGuard)
  @Post('login')
  signIn(@Body() _body: LoginDto, @AuthResponse() auth): Promise<any> {
    return auth;
  }

  @UseGuards(JwtGuard) 
  @Get('refresh')
  refresh(@UserID() userId): Promise<any> {
    return this.authService.refreshToken(userId);
  }
}
