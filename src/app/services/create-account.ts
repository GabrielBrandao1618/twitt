import { User } from '@app/entities/user';
import { UsersRepository } from '@app/repositories/users-repository';
import { Injectable } from '@nestjs/common';
import { EncryptService } from '@app/providers/encrypt-service';

interface Request {
  name: string;
  user: string;
  bio: string;
  password: string;
}
interface Response {
  account: User;
}
@Injectable()
export class CreateAccount {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly encryptService: EncryptService,
  ) {}
  async do({ bio, name, user, password }: Request): Promise<Response> {
    const encryptedPassword = await this.encryptService.hash(password);
    const createUser = new User({
      bio,
      user,
      name,
      password: encryptedPassword,
    });
    await this.usersRepository.create(createUser);
    return {
      account: createUser,
    };
  }
}
