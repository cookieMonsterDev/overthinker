import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { privateUser, publicUser } from 'src/common/selectors';
import { UserQueriesDto } from './dto/queries-user.dto';
import { Pagination } from 'src/common/types';
import { query } from 'express';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findAll(queries: UserQueriesDto): Promise<Pagination<User> | User> {
    try {
      if (queries.username) {
        const user = await this.userModel
          .findOne({ username: queries.username })
          .select(publicUser);

        return user;
      }

      const users = await this.userModel
        .find()
        .select(publicUser)
        .sort({
          createdAt: queries.orderByCreatedAt,
          updatedAt: queries.orderByUpdatedAt,
        })
        .limit(queries.limit * 1)
        .skip((queries.page - 1) * queries.limit);

      const totalPages = await this.userModel.countDocuments();

      return {
        totalPages: Math.ceil(totalPages / queries.limit),
        currentPage: queries.page,
        data: users,
      };
    } catch (error) {}
  }

  async findOneById(userId: string): Promise<User> {
    try {
      const user = await this.userModel.findById(userId).select(publicUser);

      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateOneById(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    try {
      const updatedUser = await this.userModel
        .findByIdAndUpdate(userId, updateUserDto, { new: true })
        .select(privateUser);

      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  async removeOneById(userId: string): Promise<void> {
    try {
      await this.userModel.findByIdAndDelete(userId);
    } catch (error) {
      throw error;
    }
  }
}
