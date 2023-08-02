import { Injectable, ExecutionContext } from '@nestjs/common';
import { JwtGuard } from 'src/core/auth/guards';
import { JwtPayload } from 'src/core/auth/types/jwt-payload';

@Injectable()
export class IsAdminGuard extends JwtGuard {
  canActivate(context: ExecutionContext) {
    if (!super.canActivate(context)) {
      return false;
    }
    const req = context.switchToHttp().getRequest();
    const user = req.user as JwtPayload;
    return user.role === 'ADMIN';
  }
}