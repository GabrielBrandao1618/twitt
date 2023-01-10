import { IsNotEmpty, Length } from 'class-validator';

export class ChangeUserPasswordDTO {
  @IsNotEmpty()
  @Length(8, 128)
  password: string;
}
