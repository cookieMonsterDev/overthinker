import { Transform } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';
import { Order } from 'src/common/types';
import { IsOrder } from 'src/common/validators/order.validator';

export class ArticleQueriesDto {
  @IsOptional()
  @IsOrder()
  orderByCreatedAt: Order;

  @IsOptional()
  @IsOrder()
  orderByUpdatedAt: Order;

  @IsOptional()
  @Transform(({ value }) => parseInt(value)) 
  @IsInt()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @Transform(({ value }) => parseInt(value)) 
  @IsInt()
  @Min(1)
  limit: number = 10;
}
