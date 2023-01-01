import { IsNotEmpty } from 'class-validator';

export class SignInDTO {
  @IsNotEmpty()
  user: string;
  @IsNotEmpty()
  password: string;
}
