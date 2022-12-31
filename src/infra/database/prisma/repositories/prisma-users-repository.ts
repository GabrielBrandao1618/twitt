import { User } from '@app/entities/user';
import { UsersRepository } from '@app/repositories/users-repository';
import { PrismaClient } from '@prisma/client';

export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prismaClient: PrismaClient) {}
  create(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findById(userId: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  save(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
