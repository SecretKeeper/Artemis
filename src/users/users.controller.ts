import { Controller, Get } from '@nestjs/common';
import { UserService } from './users.service';

@Controller()
export class UsersController {
  constructor(private userService: UserService) {}

  @Get('users')
  async getUsers() {
    // return this.usersService.getUsers();
  }
}
