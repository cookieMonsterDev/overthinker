import { Injectable } from '@nestjs/common';
import { CreateArticleWithAuthorDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './entities/article.entity';
import { Model } from 'mongoose';
import { publicUser } from '../../common/selectors/user.selectors';
import { ArticleQueriesDto } from './dto/queries-article.dto';
import { Pagination } from 'src/common/types';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private readonly articleModel: Model<Article>,
  ) {}

  async create(createArticleDto: CreateArticleWithAuthorDto) {
    try {
      const newArticle = await this.articleModel.create({
        ...createArticleDto,
      });

      return newArticle;
    } catch (error) {
      throw error;
    }
  }

  async findAll(queries: ArticleQueriesDto): Promise<Pagination<Article>> {
    try {
      const articles = await this.articleModel
        .find()
        .populate('author', publicUser)
        .sort({
          createdAt: queries.orderByCreatedAt,
          updatedAt: queries.orderByUpdatedAt,
        })
        .limit(queries.limit * 1)
        .skip((queries.page - 1) * queries.limit);
     

      const totalPages = await this.articleModel.countDocuments();

      return {
        totalPages: Math.ceil(totalPages / queries.limit),
        currentPage: queries.page,
        data: articles,
      };
    } catch (error) {
      throw error;
    }
  }

  async findOneById(id: string): Promise<Article> {
    try {
      const article = await this.articleModel
        .findById(id)
        .populate('author', publicUser);

      return article;
    } catch (error) {
      throw error;
    }
  }

  async updateOneById(
    id: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    try {
      const newArticle = await this.articleModel.findByIdAndUpdate(
        id,
        updateArticleDto,
        { new: true },
      );

      return newArticle;
    } catch (error) {
      throw error;
    }
  }

  async removeOneById(id: string): Promise<void> {
    try {
      await this.articleModel.findByIdAndRemove(id);
      return;
    } catch (error) {
      throw error;
    }
  }
}
