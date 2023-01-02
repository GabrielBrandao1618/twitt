import { User } from '@app/entities/user';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      bio: user.bio,
      name: user.name,
      user: user.user,
      password: user.password,
    };
  }
  static toDomain(raw: {
    name: string;
    user: string;
    createdAt: Date;
    password: string;
    bio: string;
    id: string;
  }) {
    return new User(
      {
        bio: raw.bio,
        name: raw.name,
        createdAt: raw.createdAt,
        password: raw.password,
        user: raw.user,
      },
      raw.id,
    );
  }
}
