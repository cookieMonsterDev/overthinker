import { Injectable } from '@nestjs/common';
import { CreateArticleWithAuthorDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './entities/article.entity';
import { Model } from 'mongoose';
import { publicUser } from '../../common/selectors/user.selectors';
import { ArticleQueriesDto } from './dto/queries-article.dto';
import { Pagination } from 'src/common/types';
import { ElasticSearchService } from '../elasticsearch/elasticsearch.service';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private readonly articleModel: Model<Article>,
    private readonly elasticSearchService: ElasticSearchService,
  ) {}

  async create(createArticleDto: CreateArticleWithAuthorDto) {
    try {
      const newArticle = await this.articleModel.create({
        ...createArticleDto,
      });

      // await this.elasticSearchService.indexDocument(
      //   'articles',
      //   newArticle._id.toString(),
      //   {
      //     title: newArticle.title,
      //     content: newArticle.content,
      //   },
      // );

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

      // await this.elasticSearchService.removeDocument(
      //   'articles',
      //   newArticle._id.toString(),
      // );

      // await this.elasticSearchService.indexDocument(
      //   'articles',
      //   newArticle._id.toString(),
      //   {
      //     title: newArticle.title,
      //     content: newArticle.content,
      //   },
      // );

      return newArticle;
    } catch (error) {
      throw error;
    }
  }

  async removeOneById(id: string): Promise<void> {
    try {
      const { _id } = await this.articleModel.findByIdAndRemove(id);

      // await this.elasticSearchService.removeDocument(
      //   'articles',
      //   _id.toString(),
      // );

      return;
    } catch (error) {
      throw error;
    }
  }
}
