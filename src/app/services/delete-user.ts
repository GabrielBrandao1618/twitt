import { UsersRepository } from '@app/repositories/users-repository';

interface Request {
  actorId: string;
}

export class DeleteUser {
  constructor(private readonly usersRepository: UsersRepository) {}
  async do({ actorId }: Request) {
    await this.usersRepository.delete(actorId);
  }
}
