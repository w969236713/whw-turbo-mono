import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { Prisma } from '@prisma/client';
@ApiTags('用户服务接口')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  name?: string | null;
  @Post()
  create(@Body() data: Prisma.UserCreateInput) {
    const { email, name } = data;
    return this.userService.createUser({
      email: email,
      name: name,
    });
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: '发现这条数据',
    type: 'user',
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne({
      id,
    });
  }

  @Patch(':id')
  update(
    @Param('id') id: Prisma.UserWhereUniqueInput,
    @Body() data: Prisma.UserUpdateInput,
  ) {
    return this.userService.updateUser({
      where: id,
      data,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: Prisma.UserWhereUniqueInput) {
    return this.userService.deleteUser(id);
  }
}
