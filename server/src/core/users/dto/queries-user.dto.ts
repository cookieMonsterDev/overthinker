import { IsOptional } from 'class-validator';
import { Order } from 'src/common/types/order.types';
import { IsOrder } from 'src/common/validators/order.validator';

export class UserQueriesDto {
  @IsOptional()
  @IsOrder()
  orderByCreatedAt: Order;

  @IsOptional()
  @IsOrder()
  orderByUpdatedAt: Order;
}
