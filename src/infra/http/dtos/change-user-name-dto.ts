import { IsNotEmpty } from 'class-validator';

export class ChangeUserNameDTO {
  @IsNotEmpty()
  name: string;
}
