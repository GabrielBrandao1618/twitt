import { User } from '@app/entities/user';

export class HttpUserMapper {
  static toHttp(user: User) {
    return {
      id: user.id,
      bio: user.bio,
      name: user.name,
      user: user.user,
      createdAt: user.createdAt,
    };
  }
}
