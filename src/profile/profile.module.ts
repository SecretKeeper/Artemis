import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [PrismaModule],
  providers: [ProfileService],
  exports: [ProfileService],
  controllers: [],
})
export class ProfileModule {}
