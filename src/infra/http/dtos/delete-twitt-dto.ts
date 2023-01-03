import { IsNotEmpty } from 'class-validator';

export class DeleteTwittDTO {
  @IsNotEmpty()
  twittId: string;
}
