import { JwtService } from '@app/providers/jwt-service';
import { IJwtPayload } from '@app/types/jwt-payload';
import { Injectable } from '@nestjs/common';

interface Request {
  payload: IJwtPayload;
}

interface Response {
  access_token: string;
}

@Injectable()
export class RefreshSignIn {
  constructor(private readonly jwtService: JwtService) {}
  async do({ payload }: Request): Promise<Response> {
    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
    };
  }
}
