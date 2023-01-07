import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './users.service';

@Controller()
export class UsersController {
  constructor(private userService: UserService) {}

  @Get('users/id/:id')
  async getUserByID(@Param('id') id: number) {
    return this.userService.user({ id });
  }

  @Get('users')
  async getUsers() {
    // return this.usersService.getUsers();
  }
}
