import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';
import { JwtGuard } from 'src/core/auth/guards';
import { Reflector } from '@nestjs/core';
import { JwtPayload } from 'src/core/auth/types/jwt-payload';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from 'src/core/articles/entities/article.entity';
import { Model } from 'mongoose';

@Injectable()
export class AuthorOrAdminGuard extends JwtGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @InjectModel(Article.name) private readonly articleModel: Model<Article>,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const user = req.user as JwtPayload;
    const articleId = req.params.articleId as string;
    const article = await this.articleModel.findById(articleId);
    return user.userId === article.author.toString() || user.role === 'ADMIN';
  }
}
