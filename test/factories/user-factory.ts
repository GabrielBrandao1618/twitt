import { type IUserProps, User } from '@app/entities/user';

type Override = Partial<IUserProps>;

export function makeUser(override: Override) {
  return new User({
    bio: 'Some bio',
    name: 'John Doe',
    password: 'somepassword',
    user: 'johndoe',
    ...override,
  });
}
