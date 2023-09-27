import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { JwtGuard } from '../auth/guards';
import { CommentOrAdminGuard } from 'src/common/guards';
import { CommentQueriesDto } from './dto/queries-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  findAll(@Query() query: CommentQueriesDto) {
    return this.commentsService.findAll(query);
  }

  @Get(':commentId')
  findOne(@Param('commentId') commentId: string) {
    return this.commentsService.findOneById(commentId);
  }

  @UseGuards(JwtGuard, CommentOrAdminGuard)
  @Put(':commentId')
  update(
    @Param('commentId') commentId: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentsService.updateOneById(commentId, updateCommentDto);
  }

  @UseGuards(JwtGuard, CommentOrAdminGuard)
  @Delete(':commentId')
  remove(@Param('commentId') commentId: string) {
    return this.commentsService.removeOneById(commentId);
  }
}
