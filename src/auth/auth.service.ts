import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthPayloadDto } from './dto/auth.dto';

let users = [{ id: '1', username: 'admin', password: 'password' }];

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  validateUser({ username, password }: AuthPayloadDto) {
    const existingUser = users.find((u) => u.username === username);
    if (!existingUser) return null;
    if (existingUser.password == password) {
      const { password, ...user } = existingUser;
      return this.jwtService.sign(user); // Sign the user data to create a token
    }
  }
}
