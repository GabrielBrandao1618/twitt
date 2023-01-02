import { User } from '@app/entities/user';
import { UsersRepository } from '@app/repositories/users-repository';
import { Injectable } from '@nestjs/common';
import { BcryptService } from '@app/providers/bcrypt-service';

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
    private readonly bcryptService: BcryptService,
  ) {}
  async do({ bio, name, user, password }: Request): Promise<Response> {
    const encryptedPassword = await this.bcryptService.hash(password);
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
