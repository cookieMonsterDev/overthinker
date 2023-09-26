import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import cors from '../../security/cors.confing';

@WebSocketGateway(81, { cors })
export class CommentsGateway {


  @SubscribeMessage('message')
  handleMessage(@MessageBody() payload: any): string {
    console.log(payload);
    return 'Hello world!';
  }
}
