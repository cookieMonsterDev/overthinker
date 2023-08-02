import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './entities/article.entity';
import { Model } from 'mongoose';
import { publicUser } from '../../common/selectors/user.selectors';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private readonly articleModel: Model<Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto) {
    try {
      const newArticle = await this.articleModel.create({
        ...createArticleDto,
      });

      return newArticle;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const articles = await this.articleModel.find();

      return articles;
    } catch (error) {
      throw error;
    }
  }

  async findOneById(id: string) {
    try {
      const article = await this.articleModel
        .findById(id)
        .populate('author', publicUser);

      return article;
    } catch (error) {
      throw error;
    }
  }

  async updateOneById(id: string, updateArticleDto: UpdateArticleDto) {
    try {
      const newArticle = await this.articleModel.findByIdAndUpdate(id, {
        ...updateArticleDto,
      });

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
