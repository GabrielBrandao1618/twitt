import { Twitt } from '@app/entities/twitt';
import { TwittsRepository } from '@app/repositories/twitts-repository';

interface Request {
  content: string;
  actorId: string;
}
interface Response {
  createdTwitt: Twitt;
}

export class CreateTwitt {
  constructor(private readonly twittsRepository: TwittsRepository) {}
  async do({ actorId, content }: Request): Promise<Response> {
    const createTwitt = new Twitt({
      authorId: actorId,
      content: content,
    });
    await this.twittsRepository.create(createTwitt);
    return {
      createdTwitt: createTwitt,
    };
  }
}
