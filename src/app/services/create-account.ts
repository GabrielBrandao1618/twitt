import { User } from '@app/entities/user';
import { UsersRepository } from '@app/repositories/users-repository';
import { Injectable } from '@nestjs/common';
import { EncryptService } from '@app/providers/encrypt-service';

interface Request {
  name: string;
  user: string;
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
  async do({ name, user, password }: Request): Promise<Response> {
    if (password.length > 128) {
      throw new Error('Password should not be greater than 128 characters');
    }
    if (password.length < 8) {
      throw new Error('Password should have at least 8 characters');
    }
    if (password.includes(' ')) {
      throw new Error('Password should not contain spaces');
    }
    const encryptedPassword = await this.encryptService.hash(password);
    const createUser = new User({
      bio: '',
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
