import { IsNotEmpty } from 'class-validator';

export class CreateAccountDTO {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  bio: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  user: string;
}
