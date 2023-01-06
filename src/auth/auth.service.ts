import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
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
    const user = await this.prisma.user.findFirst({
      where: {
        [isTryingWithEmail ? 'email' : 'username']: username_or_email,
      },
    });

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) return user;
    }

    throw new UnauthorizedException();
  }

  async login(credential: LoginDto) {
    const user = await this.authenticateUser(
      credential.username_or_email,
      credential.password,
      isEmail(credential.username_or_email),
    );
    return {
      access_token: this.jwtService.sign(user),
    };
  }

  async register(user: CreateUserDto) {
    return await this.userService.createUser(user);
  }
}
