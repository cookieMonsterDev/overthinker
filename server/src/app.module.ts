import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './core/auth/auth.module';

@Module({
  imports: [AuthModule, DatabaseModule],
})
export class AppModule {}
