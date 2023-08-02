import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';
import { JwtGuard } from 'src/core/auth/guards';
import { Reflector } from '@nestjs/core';
import { JwtPayload } from 'src/core/auth/types/jwt-payload';

@Injectable()
export class UserOrAdminGuard extends JwtGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const user = req.user as JwtPayload;
    const userId = req.params.userId as string;
    return user.userId === userId || user.role === 'ADMIN';
  }
}