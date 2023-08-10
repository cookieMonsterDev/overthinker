import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from '../articles/entities/article.entity';
import { Model } from 'mongoose';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Article.name) private readonly articleModel: Model<Article>,
  ) {}

  async search(query: string): Promise<any[]> {
    try {
      if (query.length < 3) return null;

      const searchResults = await this.articleModel
        .find({
          $or: [
            { title: { $regex: query, $options: 'i' } },
            { content: { $regex: query, $options: 'i' } },
          ],
        })
        .exec();

      return searchResults;
    } catch (error) {
      throw error;
    }
  }
}
