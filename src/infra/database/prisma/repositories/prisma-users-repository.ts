import { User } from '@app/entities/user';
import { UsersRepository } from '@app/repositories/users-repository';
import { PrismaUserMapper } from '@infra/mappers/prisma-user-mapper';
import { PrismaClient } from '@prisma/client';

export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prismaClient: PrismaClient) {}
  async create(user: User): Promise<void> {
    await this.prismaClient.user.create({
      data: PrismaUserMapper.toPrisma(user),
    });
  }
  async findById(userId: string): Promise<User | null> {
    const foundUser = await this.prismaClient.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!foundUser) {
      return null;
    }
    return PrismaUserMapper.toDomain(foundUser);
  }
  async save(user: User): Promise<void> {
    await this.prismaClient.user.update({
      data: PrismaUserMapper.toPrisma(user),
      where: {
        id: user.id,
      },
    });
  }
}