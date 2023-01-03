import { TwittsRepository } from '@app/repositories/twitts-repository';
import { Injectable } from '@nestjs/common';

interface Request {
  twittId: string;
  actorId: string;
}

@Injectable()
export class DeleteTwitt {
  constructor(private readonly twittsRepository: TwittsRepository) {}
  async do({ actorId, twittId }: Request) {
    const targetTwitt = await this.twittsRepository.findById(twittId);
    if (!targetTwitt) {
      throw new Error('Twitt not found');
    }
    if (targetTwitt.authorId !== actorId) {
      throw new Error('Only author should be able to delete a twitt');
    }
    await this.twittsRepository.delete(twittId);
  }
}
