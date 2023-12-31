import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import cors from '../../security/cors.confing';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentsService } from './comments.service';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@WebSocketGateway(81, { cors })
export class CommentsGateway {
  constructor(private readonly commentsService: CommentsService) {}
  @WebSocketServer()
  server: Server;

  // handleConnection(@ConnectedSocket() client: Socket) {}

  // handleDisconnect(@ConnectedSocket() client: Socket) {}

  @SubscribeMessage('join')
  handleJoin(@MessageBody() room: string, @ConnectedSocket() client: Socket) {
    client.join(room);
  }

  @SubscribeMessage('leave')
  handleLeave(@MessageBody() room: string, @ConnectedSocket() client: Socket) {
    client.leave(room);
  }

  @SubscribeMessage('message')
  async handleMessage(
    client: Socket,
    @MessageBody() payload: CreateCommentDto,
  ) {
    try {
      const commentDto = plainToClass(CreateCommentDto, payload);
      const errors = await validate(commentDto);

      if (errors.length > 0) {
        client.emit('error', {
          errors: errors.map((error) => error.constraints),
        });
        return;
      }

      const newComment = await this.commentsService.create(payload);

      this.server.to(payload.article).emit('message', newComment);
    } catch (error) {
      throw error;
    }
  }
}
