import { randomUUID } from 'node:crypto';

import { sign, verify } from 'jsonwebtoken';

import { JwtService } from '@app/providers/jwt-service';

export class JwtMockService implements JwtService {
  jwtSecret: string;
  constructor(secret?: string) {
    this.jwtSecret = secret ?? randomUUID();
  }
  sign(payload: object): string {
    return sign(payload, this.jwtSecret);
  }
  verify(token: string): unknown {
    return verify(token, this.jwtSecret);
  }
}
