import { Twitt } from '../entities/twitt';

export abstract class TwittsRepository {
  abstract create(twitt: Twitt): Promise<void>;
  abstract findById(twittId: string): Promise<Twitt | null>;
  abstract save(twitt: Twitt): Promise<void>;
  abstract findByAuthorId(authorId: string): Promise<Twitt[]>;
}