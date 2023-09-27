import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { publicUser } from 'src/common/selectors';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private readonly commentModel: Model<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    try {
      const newComment = await this.commentModel.create({
        ...createCommentDto,
      });

      return newComment;
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return `This action returns all comments`;
  }

  async findOneById(id: string) {
    try {
      const comment = await this.commentModel
        .findById(id)
        .populate('author', publicUser);

      return comment;
    } catch (error) {
      throw error;
    }
  }

  async updateOneById(id: string, updateCommentDto: UpdateCommentDto) {
    try {
      const newComment = await this.commentModel.findByIdAndUpdate(
        id,
        updateCommentDto,
        { new: true },
      );

      return newComment;
    } catch (error) {
      throw error;
    }
  }

  async removeOneById(id: string) {
    try {
      await this.commentModel.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}
