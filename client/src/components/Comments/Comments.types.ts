import { PublicUser } from "@/services/user/types";

export interface CommentsProps {
  comments: CommentProps[] | null;
}

export interface CommentProps {
  _id: string;
  user: PublicUser;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AddCommentProps
  extends Pick<PublicUser, "avatarUrl" | "_id"> {}
