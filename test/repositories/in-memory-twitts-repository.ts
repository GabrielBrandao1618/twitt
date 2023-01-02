import { Twitt } from '@app/entities/twitt';
import { TwittsRepository } from '@app/repositories/twitts-repository';

export class InMemoryTwittsRepository implements TwittsRepository {
  twitts: Twitt[] = [];
  async findByRange(amount: number, page: number): Promise<Twitt[]> {
    return this.twitts.slice((page - 1) * amount, page * amount);
  }
  async create(twitt: Twitt): Promise<void> {
    this.twitts.push(twitt);
  }
  async findById(twittId: string): Promise<Twitt | null> {
    return this.twitts.find((twitt) => twitt.id === twittId) ?? null;
  }
  async save(twitt: Twitt): Promise<void> {
    const targetIndex = this.twitts.findIndex((item) => item.id === twitt.id);
    this.twitts[targetIndex] = twitt;
  }
  async findByAuthorId(authorId: string): Promise<Twitt[]> {
    return this.twitts.filter((twitt) => twitt.authorId === authorId);
  }
}
