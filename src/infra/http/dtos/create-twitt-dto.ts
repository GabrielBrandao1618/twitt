import { IJwtPayload } from '@app/types/jwt-payload';

export class CreateTwittDTO {
  body: {
    content: string;
  };
  user: IJwtPayload;
}
