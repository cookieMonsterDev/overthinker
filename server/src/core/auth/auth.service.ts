import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Registerdto } from './dto/register.dto';
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
      const user = await this.userModel.findOne({ email });

      if (!user) throw new NotFoundException('User not found');

      const passMatches = await argon2.verify(user.hash, password);
      if (!passMatches)
        throw new ForbiddenException('Email or password is wrong');

      const token = await this.generateToken({
        userId: user._id,
        role: user.role,
      });

      return { user, token };
    } catch (error) {
      throw error;
    }
  }

  async register({ password, ...rest }: Registerdto): Promise<any> {
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

      return { user, token };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async refreshTokens(userId: string): Promise<any> {
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
      expiresIn: '15m',
    });

    return token;
  }
}
