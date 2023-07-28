import {
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter extends BaseExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    switch (exception.code) {
      case 11000:
        console.log(exception);
        response.status(HttpStatus.CONFLICT).json({
          statusCode: HttpStatus.CONFLICT,
          message: [
            ...Object.entries(exception['keyValue']).map(
              (e) => `${e[0]} '${e[1]}' is already taken`,
            ),
          ],
          error: 'Conflict',
        });
        break;
      default:
        super.catch(new HttpException('Internal Server Error', 500), host);
        break;
    }
  }
}
