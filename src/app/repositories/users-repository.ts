import { User } from '../entities/user';

export abstract class UsersRepository {
  abstract create(user: User): Promise<void>;
  abstract findById(userId: string): Promise<User | null>;
  abstract save(user: User): Promise<void>;
  abstract findByUser(user: string): Promise<User | null>;
  abstract delete(userId: string): Promise<void>;
}
