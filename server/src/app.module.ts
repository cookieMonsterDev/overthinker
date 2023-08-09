import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './core/auth/auth.module';
import { UsersModule } from './core/users/users.module';
import { ArticlesModule } from './core/articles/articles.module';
import { SearchModule } from './core/search/search.module';
import { ElasticSearchModule } from './core/elasticsearch/elasticsearch.module';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    UsersModule,
    ArticlesModule,
    SearchModule,
    ElasticSearchModule,
  ],
})
export class AppModule {}
