import { UsersRepository } from '@app/repositories/users-repository';
import { Injectable } from '@nestjs/common';

interface Request {
  actorId: string;
}

@Injectable()
export class DeleteUser {
  constructor(private readonly usersRepository: UsersRepository) {}
  async do({ actorId }: Request) {
    await this.usersRepository.delete(actorId);
  }
}
