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

@ValidatorConstraint({ name: 'IsUniqueEmail', async: true })
export class IsUniqueEmailConstraint
  implements ValidatorConstraintInterface
{
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async validate(email: string) {
    if (!email) return true;
    console.log(email)
    const user = await this.userModel.findOne({ email });
    return !user;
  }

  defaultMessage(args: ValidationArguments) {
    const email = args.value;
    return `email "${email}" is already taken`;
  }
}

export function IsUniqueEmail(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUniqueEmailConstraint,
    });
  };
}
