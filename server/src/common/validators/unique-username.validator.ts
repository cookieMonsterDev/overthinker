import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/users/entities/user.entity';

@ValidatorConstraint({ name: 'IsUniqueUsername', async: true })
export class IsUniqueUsernameConstraint
  implements ValidatorConstraintInterface
{
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async validate(username: string) {
    if (!username) return true;

    const user = await this.userModel.findOne({ username });
    return !user;
  }

  defaultMessage(args: ValidationArguments) {
    const username = args.value;
    return `username "${username}" is already taken`;
  }
}

export function IsUniqueUsername(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUniqueUsernameConstraint,
    });
  };
}
