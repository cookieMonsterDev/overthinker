import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from '../articles/entities/article.entity';
import { Model } from 'mongoose';
import { User } from '../users/entities/user.entity';
import { publicUser } from 'src/common/selectors';

interface SearchResponse {
  users: User[];
  articles: Article[];
}

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Article.name) private readonly articlesModel: Model<Article>,
    @InjectModel(User.name) private readonly usersModel: Model<User>,
  ) {}

  async search(query: string): Promise<SearchResponse> {
    try {
      if (query.length < 3) return null;

      const usersResults = await this.usersModel
        .find({
          $or: [{ username: { $regex: query, $options: 'i' } }],
        })
        .select(publicUser)
        .limit(5)
        .exec();

      const articlesResults = await this.articlesModel
        .find({
          $or: [
            { title: { $regex: query, $options: 'i' } },
            { content: { $regex: query, $options: 'i' } },
          ],
        })
        .populate('author', publicUser)
        .limit(5)
        .exec();

      return {
        users: usersResults,
        articles: articlesResults,
      };
    } catch (error) {
      throw error;
    }
  }
}
