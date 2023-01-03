import { IsNotEmpty } from 'class-validator';

export class ChangeUserNameDTO {
  @IsNotEmpty()
  body: {
    name: string;
  };
  user: {
    user: string;
    id: string;
  };
}
