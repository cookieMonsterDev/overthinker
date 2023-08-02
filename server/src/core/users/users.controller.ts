import {
  Controller,
  Get,
  Body,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  Put,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from '../auth/guards';
import { UserOrAdminGuard } from 'src/common/guards/user-or-admin.guard';
import { UserQueriesDto } from './dto/queries-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Query() queries: UserQueriesDto) {
    return this.usersService.findAll(queries);
  }

  @Get(':userId')
  findOneById(@Param('userId') userId: string) {
    return this.usersService.findOneById(userId);
  }

  @UseGuards(JwtGuard, UserOrAdminGuard)
  @Put(':userId')
  updateOneById(
    @Param('userId') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(JwtGuard, UserOrAdminGuard)
  @Delete(':userId')
  @HttpCode(204)
  removeOneById(@Param('userId') userId: string) {
    return this.usersService.removeOneById(userId);
  }
}
