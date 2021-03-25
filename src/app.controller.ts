import { Body, Controller, Get, Request, Post, UseGuards, UnauthorizedException } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { UserDto } from './auth/dto/user.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('auth/login')
  async login(@Body() UserDto: UserDto) {
    const validUser = await this.authService.validateUser(UserDto)
    if (validUser) {
      return this.authService.login(validUser)
    }
    throw new UnauthorizedException()
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}