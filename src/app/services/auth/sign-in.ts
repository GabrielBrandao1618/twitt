import { compare } from 'bcrypt';

import { UsersRepository } from '@app/repositories/users-repository';
import { Injectable } from '@nestjs/common';
import { IJwtPayload } from '@app/types/jwt-payload';
import { JwtRefreshService } from '@app/providers/jwt-refresh-service';

interface Request {
  user: string;
  password: string;
}
interface Response {
  refresh_token: string;
}

@Injectable()
export class SignIn {
  constructor(
    private readonly jwtService: JwtRefreshService,
    private readonly usersRepository: UsersRepository,
  ) {}
  async do({ password, user }: Request): Promise<Response> {
    const foundUser = await this.usersRepository.findByUser(user);
    if (!foundUser) {
      throw new Error('User not found');
    }
    const isPasswordCorrect = await compare(password, foundUser.password);
    if (!isPasswordCorrect) {
      throw new Error('Password incorrect');
    }
    const token = this.jwtService.sign({
      user: foundUser.user,
      id: foundUser.id,
    } as IJwtPayload);
    return {
      refresh_token: token,
    };
  }
}
