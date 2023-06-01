import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const res = await this.prisma.user.findMany({
      where: {
        email: data.email,
      },
    });


    return this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    console.log(userWhereUniqueInput);
    return this.prisma.user.findUnique({
      where: {
        id: Number(userWhereUniqueInput.id),
      },
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
