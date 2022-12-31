import { Twitt } from '@app/entities/twitt';

export class PrismaTwittMapper {
  static toPrisma(twitt: Twitt) {
    return {
      id: twitt.id,
      content: twitt.content,
      authorId: twitt.authorId,
      createdAt: twitt.createdAt,
      updatedAt: twitt.updatedAt,
    };
  }
  static toDomain(raw: {
    content: string;
    createdAt: Date;
    updatedAt: Date;
    authorId: string;
    id: string;
  }) {
    return new Twitt(
      {
        content: raw.content,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
        authorId: raw.authorId,
      },
      raw.id,
    );
  }
}
