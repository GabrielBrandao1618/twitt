import { Twitt } from '@app/entities/twitt';

export class HttpTwittMapper {
  static toHttp(twitt: Twitt) {
    return {
      content: twitt.content,
      createdAt: twitt.createdAt,
      updatedAt: twitt.updatedAt,
      id: twitt.id,
      authorId: twitt.authorId,
    };
  }
}
