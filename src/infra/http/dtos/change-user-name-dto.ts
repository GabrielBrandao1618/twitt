import { IJwtPayload } from '@app/types/jwt-payload';
import { IsNotEmpty } from 'class-validator';

export class ChangeUserNameDTO {
  @IsNotEmpty()
  body: {
    name: string;
  };
  user: IJwtPayload;
}
