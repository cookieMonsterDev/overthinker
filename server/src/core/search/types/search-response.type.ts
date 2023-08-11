import { Article } from 'src/core/articles/entities/article.entity';
import { User } from 'src/core/users/entities/user.entity';

export interface SearchResponse {
  users: User[];
  articles: Article[];
}
