import { IsNotEmpty } from 'class-validator';

export class EditTwittDTO {
  @IsNotEmpty()
  content: string;
  @IsNotEmpty()
  id: string;
}
