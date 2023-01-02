import { EncryptService } from '@app/providers/encrypt-service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService implements EncryptService {
  salt = 12;

  async hash(data: string | Buffer) {
    return await bcrypt.hash(data, this.salt);
  }
  async compare(data: string | Buffer, encrypted: string) {
    return await bcrypt.compare(data, encrypted);
  }
}
