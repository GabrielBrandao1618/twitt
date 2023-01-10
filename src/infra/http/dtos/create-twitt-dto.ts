import { IsNotEmpty, Length } from 'class-validator';

export class CreateTwittDTO {
  @IsNotEmpty()
  @Length(0, 255)
  content: string;
}
