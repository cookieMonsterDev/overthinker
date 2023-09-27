import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { publicUser } from 'src/common/selectors';
import { CommentQueriesDto } from './dto/queries-comment.dto';

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

      const comment = await this.findOneById(newComment._id);

      return comment;
    } catch (error) {
      throw error;
    }
  }

  async findAll(queries: CommentQueriesDto) {
    try {
      const query = {};

      if (queries.author) {
        query['author'] = queries.author;
      }

      if (queries.article) {
        query['article'] = queries.article;
      }

      const comments = await this.commentModel
        .find(query)
        .populate('author', publicUser)
        .sort({
          createdAt: queries.orderByCreatedAt,
          updatedAt: queries.orderByUpdatedAt,
        })
        .limit(queries.limit * 1)
        .skip((queries.page - 1) * queries.limit);

      const totalPages = await this.commentModel.countDocuments(query);

      return {
        totalPages: Math.ceil(totalPages / queries.limit),
        currentPage: queries.page,
        data: comments,
      };
    } catch (error) {
      throw error;
    }
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
