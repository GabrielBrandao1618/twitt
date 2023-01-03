import { IsNotEmpty } from 'class-validator';

export class CreateTwittDTO {
  @IsNotEmpty()
  content: string;
}
