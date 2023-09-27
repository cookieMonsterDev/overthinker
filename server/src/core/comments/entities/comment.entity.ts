import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaTypes } from 'mongoose';
import { Article } from 'src/core/articles/entities/article.entity';
import { User } from 'src/core/users/entities/user.entity';

@Schema({ timestamps: true })
export class Comment extends Document {
  @Prop({
    type: SchemaTypes.Types.ObjectId,
    ref: User.name,
    required: true,
    unique: false,
  })
  author: User;

  @Prop({
    type: SchemaTypes.Types.ObjectId,
    ref: Article.name,
    required: true,
    unique: false,
  })
  article: Article;

  @Prop({
    required: true,
  })
  text: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
