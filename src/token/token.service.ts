import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { User } from '@prisma/client';

@Injectable()
export class TokenService {
  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  BASE_OPTIONS: JwtSignOptions = {
    issuer: this.configService.get<string>('ISSUER'),
    audience: this.configService.get<string>('AUDIENCE'),
  };

  public async generateAccessToken(user: User): Promise<string> {
    const opts: JwtSignOptions = {
      ...this.BASE_OPTIONS,
      secret: this.configService.get<string>('JWT_ACCESS_TOKEN_SECRET'),
      expiresIn: this.configService.get<string>(
        'JWT_ACCESS_TOKEN_EXPIRATION_TIME',
      ),
      subject: String(user.id),
    };

    return this.jwtService.signAsync(user, opts);
  }

  public async generateRefreshToken(user: User): Promise<string> {
    const opts: JwtSignOptions = {
      ...this.BASE_OPTIONS,
      secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn: this.configService.get<string>(
        'JWT_REFRESH_TOKEN_EXPIRATION_TIME',
      ),
      subject: String(user.id),
    };

    return this.jwtService.signAsync(user, opts);
  }
}
