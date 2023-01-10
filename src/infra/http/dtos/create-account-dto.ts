import { IsNotEmpty, Length } from 'class-validator';

export class CreateAccountDTO {
  @IsNotEmpty()
  @Length(4, 50)
  name: string;

  @IsNotEmpty()
  @Length(8, 128)
  password: string;

  @IsNotEmpty()
  @Length(4, 20)
  user: string;
}
