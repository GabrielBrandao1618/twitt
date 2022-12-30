import { User } from '@app/entities/user';
import { UsersRepository } from '@app/repositories/users-repository';

interface Request {
  name: string;
  user: string;
  bio: string;
  password: string;
}
interface Response {
  account: User;
}

export class CreateAccount {
  constructor(private readonly usersRepository: UsersRepository) {}
  async do({ bio, name, user, password }: Request): Promise<Response> {
    const createUser = new User({
      bio,
      user,
      name,
      password,
    });
    await this.usersRepository.create(createUser);
    return {
      account: createUser,
    };
  }
}
