import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { localGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  // constructor(private readonly authService: AuthService) {}
  constructor() {}

  @Post('login')
  @UseGuards(localGuard)
  // login(@Body() authPayloadDto: AuthPayloadDto) {
  //   const token = this.authService.validateUser(authPayloadDto);
  //   if (!token) throw new UnauthorizedException('Invalid credentials');
  //   return token;
  // }
  login(@Req() req: Request) {
    return req.user;
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  profile(@Req() req: Request) {
    console.log(req.user);
  }
}
