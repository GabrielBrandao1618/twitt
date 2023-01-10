import { IsNotEmpty, Length } from 'class-validator';

export class ChangeUserNameDTO {
  @IsNotEmpty()
  @Length(4, 50)
  name: string;
}
