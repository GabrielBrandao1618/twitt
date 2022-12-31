import { TwittsRepository } from '@app/repositories/twitts-repository';
import { Twitt } from '@app/entities/twitt';
import { PrismaTwittMapper } from '@infra/mappers/prisma-twitt-mapper';
import { PrismaClient } from '@prisma/client';

export class PrismaTwittsRepository implements TwittsRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  async create(twitt: Twitt) {
    await this.prismaClient.twitt.create({
      data: PrismaTwittMapper.toPrisma(twitt),
    });
  }
  async findById(twittId: string) {
    const searchResult = await this.prismaClient.twitt.findUnique({
      where: {
        id: twittId,
      },
    });
    if (!searchResult) {
      return null;
    }
    return PrismaTwittMapper.toDomain(searchResult);
  }
  async save(twitt: Twitt) {
    await this.prismaClient.twitt.update({
      where: {
        id: twitt.id,
      },
      data: PrismaTwittMapper.toPrisma(twitt),
    });
  }
  async findByAuthorId(authorId: string) {
    const searchResult = await this.prismaClient.twitt.findMany({
      where: {
        authorId: authorId,
      },
    });
    return searchResult.map(PrismaTwittMapper.toDomain);
  }
}
