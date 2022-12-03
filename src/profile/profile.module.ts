import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProfileService } from './profile.service';

@Module({
  providers: [ProfileService, PrismaService],
  exports: [ProfileService],
  controllers: [],
})
export class ProfileModule {}
