import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(User: UserDto): Promise<any> {
    const user = await this.usersService.findOne(User.username);
    if (user && user.password === User.password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(User: any) {
    const payload = { sub: User.userId, username: User.username, role: User.role  };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
