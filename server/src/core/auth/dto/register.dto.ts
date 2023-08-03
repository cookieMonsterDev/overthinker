import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  Matches,
  IsOptional,
  IsEnum,
  IsUrl
} from 'class-validator';
import { UserRoles } from '../types/roles';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(64)
  @Matches(/(?=.*?[A-Z])/, {
    message: 'password must have at least 1 upper case letter',
  })
  @Matches(/(?=.*?[a-z])/, {
    message: 'password must have at least 1 lower case letter',
  })
  @Matches(/(?=.*?[0-9])/, {
    message: 'password must have at least 1 number',
  })
  @Matches(/(?=.*?[#?!@$%^_&*-])/, {
    message: 'password must have at least 1 special character',
  })
  @Matches(/^\S*$/, {
    message: 'password must have no spaces',
  })
  password: string;

  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  bio: string;

  @IsOptional()
  @IsUrl()
  avatarUrl: string;

  @IsOptional()
  @IsEnum(UserRoles)
  role: UserRoles;
}
