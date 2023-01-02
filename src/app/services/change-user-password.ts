import { User } from '@app/entities/user';
import { UsersRepository } from '@app/repositories/users-repository';
import { BcryptService } from '@app/providers/bcrypt-service';

interface Request {
  actorId: string;
  password: string;
}
interface Response {
  result: User;
}

export class ChangeUserPassword {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly bcryptService: BcryptService,
  ) {}
  async do({ actorId, password }: Request): Promise<Response> {
    const targetUser = await this.usersRepository.findById(actorId);
    if (!targetUser) {
      throw new Error('User not found');
    }
    const encryptedPassword = await this.bcryptService.hash(password);
    targetUser.password = encryptedPassword;
    await this.usersRepository.save(targetUser);
    return {
      result: targetUser,
    };
  }
}
