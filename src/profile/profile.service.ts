import { Injectable } from '@nestjs/common';
import { Profile, Prisma } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async getProfile(
    profileWhereUniqueInput: Prisma.ProfileWhereUniqueInput,
  ): Promise<Profile | null> {
    return this.prisma.profile.findUnique({
      where: profileWhereUniqueInput,
    });
  }

  async createProfile(data: Prisma.ProfileCreateInput): Promise<Profile> {
    return this.prisma.profile.create({
      data,
    });
  }

  async updateProfile(params: {
    where: Prisma.ProfileWhereUniqueInput;
    data: Prisma.ProfileUpdateInput;
  }): Promise<Profile> {
    const { data, where } = params;
    return this.prisma.profile.update({
      data,
      where,
    });
  }

  async deleteProfile(where: Prisma.ProfileWhereUniqueInput): Promise<Profile> {
    return this.prisma.profile.delete({
      where,
    });
  }
}
