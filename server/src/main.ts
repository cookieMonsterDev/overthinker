import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import corsConfig from './security/cors.confing';
import { config } from 'dotenv';
import { MongoExceptionFilter } from './database/mongoose.filter';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new MongoExceptionFilter())

  app.enableCors(corsConfig);

  await app.listen(3333);
}
bootstrap();
