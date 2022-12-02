import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { CassandraModule } from '../cassandra/cassandra.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [CassandraModule, PrismaModule],
  providers: [UserService],
  exports: [UserService],
  controllers: [UsersController],
})
export class UserModule {}
