import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { JwtPayload } from './types/jwt-payload';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private Jwt: JwtService,
  ) {}

  async login({ email, password }: LoginDto): Promise<any> {
    try {
      const user = await this.userModel.findOne({ email }).lean();

      if (!user) throw new NotFoundException('User not found');

      const passMatches = await argon2.verify(user.hash, password);
      if (!passMatches) throw new ForbiddenException('Invalid credentials');

      const token = await this.generateToken({
        userId: user._id,
        role: user.role,
      });

      const { hash, ...userWithoutHash } = user;

      return { user: { ...userWithoutHash }, token };
    } catch (error) {
      throw error;
    }
  }

  async register({ password, ...rest }: RegisterDto): Promise<any> {
    try {
      const passwordHash = await argon2.hash(password);

      const user = await this.userModel.create({
        hash: passwordHash,
        ...rest,
      });

      const token = await this.generateToken({
        userId: user._id,
        role: user.role,
      });

      const { hash, ...userWithoutHash } = user.toJSON();

      return { user: { ...userWithoutHash }, token };
    } catch (error) {
      throw error;
    }
  }

  async refreshToken(userId: string): Promise<any> {
    try {
      const user = await this.userModel.findById(userId);
      const token = await this.generateToken({
        userId: user._id,
        role: user.role,
      });

      return { user, token };
    } catch (error) {
      throw error;
    }
  }

  private async generateToken(payload: JwtPayload) {
    const token = await this.Jwt.sign(payload, {
      secret: process.env.AUTH_TOKEN_SECRET,
      expiresIn: '7d',
    });

    return token;
  }
}
