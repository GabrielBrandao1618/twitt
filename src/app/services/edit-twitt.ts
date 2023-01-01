import { Twitt } from '@app/entities/twitt';
import { TwittsRepository } from '@app/repositories/twitts-repository';
import { Injectable } from '@nestjs/common';

interface Request {
  content: string;
  actorId: string;
  twittId: string;
}
interface Response {
  result: Twitt;
}

@Injectable()
export class EditTwitt {
  constructor(private twittsRepository: TwittsRepository) {}
  async do({ actorId, content, twittId }: Request): Promise<Response> {
    const targetTwitt = await this.twittsRepository.findById(twittId);
    if (!targetTwitt) {
      throw new Error('Twitt not found');
    }
    if (actorId !== targetTwitt.authorId) {
      throw new Error('Only the author should be able to edit a twitt');
    }
    targetTwitt.content = content;
    await this.twittsRepository.save(targetTwitt);
    return {
      result: targetTwitt,
    };
  }
}
