import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaTypes } from 'mongoose';
import { User } from 'src/core/users/entities/user.entity';

@Schema({ timestamps: true })
export class Article extends Document {
  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    required: true,
  })
  content: string;

  @Prop({
    default: [],
  })
  tags: string[];

  @Prop({
    type: SchemaTypes.Types.ObjectId,
    ref: User.name,
    required: true,
  })
  author: User;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
