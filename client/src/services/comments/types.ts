import { Order } from "@/types/order.type";
import { PublicUser } from "../user/types";

export interface CommentResponse {
  _id: string;
  author: PublicUser;
  article: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface FindCommentsPayload {
  author: string;
  article: string;
  orderByCreatedAt: Order;
  orderByUpdatedAt: Order;
  page: number;
  limit: number;
}