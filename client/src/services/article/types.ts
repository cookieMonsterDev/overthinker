import { PublicUser } from "../user/types";

export interface ArticleBody {
  title: string;
  content: string;
}

export interface CreateArticleServisePayload {
  body: ArticleBody;
  token: string;
}

export interface ArticleResponse {
  _id: string;
  title: string;
  content: string;
  tags: any[];
  author: PublicUser;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
