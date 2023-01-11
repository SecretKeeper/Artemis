import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { UserModule } from './../users/user.module';
import { PrismaModule } from 'nestjs-prisma';
import { TokenModule } from 'src/token/token.module';
import { TokenService } from 'src/token/token.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [UserModule, PassportModule, PrismaModule, TokenModule],
  controllers: [AuthController],
  providers: [
    ConfigService,
    AuthService,
    LocalStrategy,
    JwtService,
    TokenService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
