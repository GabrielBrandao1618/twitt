import { Twitt } from '@app/entities/twitt';
import { TwittsRepository } from '@app/repositories/twitts-repository';

interface Request {
  userId: string;
}
interface Response {
  twitts: Twitt[];
}

export class ListTwittsByUser {
  constructor(private readonly twittsRepository: TwittsRepository) {}
  async do({ userId }: Request): Promise<Response> {
    const queryResult = await this.twittsRepository.findByAuthorId(userId);
    return {
      twitts: queryResult,
    };
  }
}
