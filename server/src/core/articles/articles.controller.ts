import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { JwtGuard } from '../auth/guards';
import { AuthorOrAdminGuard } from 'src/common/guards/author-or-admin.guard';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  findAll() {
    return this.articlesService.findAll();
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

  @Delete(':articleId')
  remove(@Param('articleId') articleId: string) {
    return this.articlesService.removeOneById(articleId);
  }
}
