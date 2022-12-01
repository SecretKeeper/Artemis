import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { CassandraService } from './cassandra/cassandra.service';
import { CassandraModule } from './cassandra/cassandra.module';
import { ProfileModule } from './profile/profile.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [AuthModule, UsersModule, CassandraModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService, UserService, CassandraService, PrismaService],
})
export class AppModule {}
