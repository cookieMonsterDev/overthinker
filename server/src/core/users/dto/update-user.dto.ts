import { OmitType, PartialType } from '@nestjs/mapped-types';
import { RegisterDto } from 'src/core/auth/dto/register.dto';

export class UpdateUserDto extends PartialType(
  OmitType(RegisterDto, ['password'] as const),
) {}
