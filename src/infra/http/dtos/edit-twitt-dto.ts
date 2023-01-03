import { IJwtPayload } from '@app/types/jwt-payload';

export class EditTwittDTO {
  body: {
    content: string;
    id: string;
  };
  user: IJwtPayload;
}
