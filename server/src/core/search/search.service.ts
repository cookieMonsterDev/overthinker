import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from '../articles/entities/article.entity';
import { Model } from 'mongoose';
import { ElasticSearchService } from '../elasticsearch/elasticsearch.service';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Article.name) private readonly articleModel: Model<Article>,
    private readonly elasticSearchService: ElasticSearchService,
  ) {}

  async search(query: string): Promise<any> {
    try {
      const searchQuery = {
        query: {
          multi_match: {
            query,
            fields: ['title', 'content'],
          },
        },
      };

      const searchResults = await this.elasticSearchService.search(
        'articles',
        searchQuery,
      );

      return searchResults;
    } catch (error) {
      throw error;
    }
  }
}
