import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from 'src/core/articles/entities/article.entity';
import { CommentSchema } from 'src/core/comments/entities/comment.entity';
import { UserSchema } from 'src/core/users/entities/user.entity';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGO_URL,
      }),
    }),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Article', schema: ArticleSchema },
      { name: 'Comment', schema: CommentSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
