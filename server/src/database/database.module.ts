import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from 'src/core/articles/entities/article.entity';
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
    ]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
