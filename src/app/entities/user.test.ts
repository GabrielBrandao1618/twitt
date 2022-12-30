import { User } from './user';

describe('Create user', () => {
  it('Should be able to instantiate a user', async () => {
    expect(
      new User({
        bio: 'Some bio',
        name: 'John Doe',
        password: 'password123',
        user: 'johndoe',
      }).name,
    ).toBe('John Doe');
  });
});
