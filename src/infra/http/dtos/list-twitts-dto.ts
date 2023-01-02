import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class ListTwittsDTO {
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  amount: number = 30;
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  page: number = 1;
}
