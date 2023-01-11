import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TokenService } from './token.service';

@Module({
  imports: [ConfigModule, JwtModule, TokenModule],
  providers: [ConfigService, TokenService],
})
export class TokenModule {}
