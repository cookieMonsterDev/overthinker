import { ArticleResponse } from "../article/types";
import { PublicUser } from "../user/types";

export interface SearchResponse {
  users: PublicUser[];
  articles: ArticleResponse[];
}