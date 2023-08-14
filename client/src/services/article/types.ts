import { Order } from "@/types/order.type";
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

export interface FindArticlesPayload {
  author: string;
  orderByCreatedAt: Order;
  orderByUpdatedAt: Order;
  page: number;
  limit: number;
}
