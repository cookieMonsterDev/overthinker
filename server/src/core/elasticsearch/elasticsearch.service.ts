import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class ElasticSearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async indexDocument(index: string, id: string, document: any): Promise<void> {
    try {
      await this.elasticsearchService.index({
        index,
        id,
        body: document,
      });
    } catch (error) {
      throw error;
    }
  }

  async removeDocument(index: string, id: string): Promise<void> {
    try {
      await this.elasticsearchService.delete({
        index,
        id,
      });
    } catch (error) {
      throw error;
    }
  }

  async search<T>(index: string, query: any): Promise<T> {
    try {
      const res = await this.elasticsearchService.search({
        index,
        body: query,
      });
      return res.hits.hits as T;
    } catch (error) {
      throw error;
    }
  }
}
