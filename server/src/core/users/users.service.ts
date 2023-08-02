import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { privateUser, publicUser } from 'src/common/selectors';
import { UserQueriesDto } from './dto/queries-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findAll({
    orderByCreatedAt,
    orderByUpdatedAt,
  }: UserQueriesDto): Promise<User[]> {
    try {
      const users = await this.userModel.find().select(publicUser).sort({
        createdAt: orderByCreatedAt,
        updatedAt: orderByUpdatedAt,
      });

      return users;
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

  async update(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      const updatedUser = await this.userModel
        .findByIdAndUpdate(userId, updateUserDto)
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
