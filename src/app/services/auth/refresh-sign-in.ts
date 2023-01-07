import { JwtRefreshService } from '@app/providers/jwt-refresh-service';
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
  constructor(private readonly jwtRefreshService: JwtRefreshService) {}
  async do({ payload }: Request): Promise<Response> {
    const token = this.jwtRefreshService.sign(payload);

    return {
      access_token: token,
    };
  }
}
