import { User } from '@app/entities/user';
import { UsersRepository } from '@app/repositories/users-repository';

export class InMemoryUsersRepository implements UsersRepository {
  users: User[] = [];
  async create(user: User): Promise<void> {
    this.users.push(user);
  }
  async findById(userId: string): Promise<User | null> {
    return this.users.find((user) => user.id === userId) ?? null;
  }
  async save(user: User): Promise<void> {
    const targetIndex = this.users.findIndex((item) => item.id === user.id);
    this.users[targetIndex] = user;
  }
}
