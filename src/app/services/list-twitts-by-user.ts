import { Twitt } from '@app/entities/twitt';
import { TwittsRepository } from '@app/repositories/twitts-repository';
import { Injectable } from '@nestjs/common';

interface Request {
  userId: string;
}
interface Response {
  twitts: Twitt[];
}

@Injectable()
export class ListTwittsByUser {
  constructor(private readonly twittsRepository: TwittsRepository) {}
  async do({ userId }: Request): Promise<Response> {
    const queryResult = await this.twittsRepository.findByAuthorId(userId);
    return {
      twitts: queryResult,
    };
  }
}
