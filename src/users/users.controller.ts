import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseArrayPipe,
  Query,
} from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { UserService } from './users.service';

@Controller()
export class UsersController {
  constructor(private userService: UserService) {}

  @Get('users/id/:id')
  async getUserByID(@Param('id') id: number) {
    return this.userService.user({ id });
  }

  @ApiQuery({ name: 'ids', type: Number, isArray: true, example: [1, 2] })
  @Get('users')
  async getUsersById(
    @Query(
      'ids',
      new DefaultValuePipe([1, 2]),
      new ParseArrayPipe({ items: Number, separator: ',' }),
    )
    ids: number[],
  ) {
    return this.userService.users({ where: { id: { in: ids } } });
  }
}
