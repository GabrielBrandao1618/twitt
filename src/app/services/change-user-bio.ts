import { User } from '@app/entities/user';
import { UsersRepository } from '@app/repositories/users-repository';
import { Injectable } from '@nestjs/common';

interface Request {
  actorId: string;
  bio: string;
}
interface Response {
  result: User;
}
@Injectable()
export class ChangeUserBio {
  constructor(private readonly usersRepository: UsersRepository) {}
  async do({ actorId, bio }: Request): Promise<Response> {
    const targetUser = await this.usersRepository.findById(actorId);
    if (!targetUser) {
      throw new Error('User not found');
    }
    targetUser.bio = bio;
    await this.usersRepository.save(targetUser);
    return {
      result: targetUser,
    };
  }
}
