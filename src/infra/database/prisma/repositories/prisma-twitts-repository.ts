import { TwittsRepository } from '@app/repositories/twitts-repository';
import { Twitt } from '@app/entities/twitt';
import { PrismaTwittMapper } from '@infra/database/prisma/mappers/prisma-twitt-mapper';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
@Injectable()
export class PrismaTwittsRepository implements TwittsRepository {
  constructor(private readonly prismaClient: PrismaService) {}
  async findByRange(amount: number, page: number): Promise<Twitt[]> {
    const queryResult = await this.prismaClient.twitt.findMany({
      skip: (page - 1) * amount,
      take: amount,
    });
    return queryResult.map(PrismaTwittMapper.toDomain);
  }

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
