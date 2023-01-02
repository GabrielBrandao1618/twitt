import { Twitt } from '@app/entities/twitt';
import { TwittsRepository } from '@app/repositories/twitts-repository';
import { Injectable } from '@nestjs/common';

interface Request {
  page: number;
  amount: number;
}

interface Response {
  twitts: Twitt[];
}

@Injectable()
export class ListTwitts {
  constructor(private readonly twittsRepository: TwittsRepository) {}
  async do({ amount, page }: Request): Promise<Response> {
    const twitts = await this.twittsRepository.findByRange(amount, page);
    return {
      twitts: twitts,
    };
  }
}
