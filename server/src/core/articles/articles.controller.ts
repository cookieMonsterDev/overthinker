import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  Query
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { JwtGuard } from '../auth/guards';
import { AuthorOrAdminGuard } from 'src/common/guards/author-or-admin.guard';
import { UserID } from 'src/common/decorators';
import { ArticleQueriesDto } from './dto/queries-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createArticleDto: CreateArticleDto, @UserID() author: string) {
    return this.articlesService.create({ ...createArticleDto, author });
  }

  @Get()
  findAll(@Query() query: ArticleQueriesDto) {
    return this.articlesService.findAll(query);
  }

  @Get(':articleId')
  findOne(@Param('articleId') articleId: string) {
    return this.articlesService.findOneById(articleId);
  }

  @UseGuards(JwtGuard, AuthorOrAdminGuard)
  @Put(':articleId')
  update(
    @Param('articleId') articleId: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    return this.articlesService.updateOneById(articleId, updateArticleDto);
  }

  @UseGuards(JwtGuard, AuthorOrAdminGuard)
  @Delete(':articleId')
  @HttpCode(204)
  remove(@Param('articleId') articleId: string) {
    return this.articlesService.removeOneById(articleId);
  }
}
