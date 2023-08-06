import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  tags: string[];
}

export class CreateArticleWithAuthorDto extends CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  author: string;
}
