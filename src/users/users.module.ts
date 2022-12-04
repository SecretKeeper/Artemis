import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './users.repository';
import { CassandraModule } from '../cassandra/cassandra.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [CassandraModule],
  providers: [UserService, UserRepository, PrismaService],
  exports: [UserService, UserRepository],
  controllers: [UsersController],
})
export class UsersModule {}
