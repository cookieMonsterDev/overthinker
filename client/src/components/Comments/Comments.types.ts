import { PublicUser } from "@/services/user/types";

export interface CommentsProps {
  comments: CommentProps[] | null;
  articleId: string;
}

export interface CommentProps {
  _id: string;
  user: PublicUser;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AddCommentProps {
  authorId: string;
  avatarUrl: string | null;
  articleId: string;
}
