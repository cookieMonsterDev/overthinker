import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './core/auth/auth.module';
import { UsersModule } from './core/users/users.module';

@Module({
  imports: [AuthModule, DatabaseModule, UsersModule],
})
export class AppModule {}
