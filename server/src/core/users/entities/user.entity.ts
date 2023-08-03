import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2'; 

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  hash: string;

  @Prop({
    default: null,
  })
  firstName: string;

  @Prop({
    default: null,
  })
  lastName: string;

  @Prop({
    default: null,
  })
  bio: string;

  @Prop({
    default: null,
  })
  avatarUrl: string;

  @Prop({
    enum: ['USER', 'ADMIN'],
    default: 'USER',
  })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.plugin(mongoosePaginate)