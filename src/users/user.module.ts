import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './users.repository';
import { CassandraModule } from '../cassandra/cassandra.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [CassandraModule, PrismaModule],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
  controllers: [UsersController],
})
export class UsersModule {}
