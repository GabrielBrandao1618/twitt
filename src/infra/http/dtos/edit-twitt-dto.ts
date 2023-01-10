import { IsNotEmpty, Length } from 'class-validator';

export class EditTwittDTO {
  @IsNotEmpty()
  @Length(0, 255)
  content: string;
  @IsNotEmpty()
  id: string;
}
