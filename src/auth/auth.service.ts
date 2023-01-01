import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from 'nestjs-prisma';
import { User } from '@prisma/client';
import { isEmail } from '@/utilities/functions';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async authenticateUser(
    username_or_email: string,
    password: string,
    isTryingWithEmail = false,
  ): Promise<User> {
    return this.prisma.user.findFirst({
      where: {
        AND: [
          { [isTryingWithEmail ? 'email' : 'username']: username_or_email },
          { password },
        ],
      },
    });
  }

  async login(credential: LoginDto) {
    const user = await this.authenticateUser(
      credential.username_or_email,
      credential.password,
      isEmail(credential.username_or_email),
    );

    if (!user) throw new UnauthorizedException();

    return {
      access_token: this.jwtService.sign(user),
    };
  }

  async register(user: CreateUserDto) {
    return await this.userService.createUser(user);
  }
}
