import { CommentResponse } from "@/services/comments/types";
import { Pagination } from "@/types/pagination.type";
import { Socket } from "socket.io-client";

export interface CommentsProps {
  comments:  Pagination<CommentResponse>;
  articleId: string;
}

export interface AddCommentProps {
  authorId: string;
  avatarUrl: string | null;
  articleId: string;
  socket: Socket | null
}
