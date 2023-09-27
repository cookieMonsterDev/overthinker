import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';
import { JwtGuard } from 'src/core/auth/guards';
import { Reflector } from '@nestjs/core';
import { JwtPayload } from 'src/core/auth/types/jwt-payload';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from 'src/core/comments/entities/comment.entity';
import { Model } from 'mongoose';

@Injectable()
export class CommentOrAdminGuard extends JwtGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @InjectModel(Comment.name) private readonly commentModel: Model<Comment>,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const user = req.user as JwtPayload;
    const commentId = req.params.commentId as string;
    const comment = await this.commentModel.findById(commentId);
    return user.userId === comment.author.toString() || user.role === 'ADMIN';
  }
}
