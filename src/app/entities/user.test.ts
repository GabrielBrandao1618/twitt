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
  it('Should have a limit of 255 characters in bio', async () => {
    expect(
      () =>
        new User({
          bio: 'a'.repeat(256),
          name: 'John Doe',
          password: 'password123',
          user: 'johndoe',
        }).name,
    ).toThrow();
  });
  it('Should have a limit of 20 characters in user', async () => {
    expect(
      () =>
        new User({
          bio: 'Some bio',
          name: 'John Doe',
          password: 'password123',
          user: 'o'.repeat(21),
        }).name,
    ).toThrow();
  });
  it('Should have a limit of 50 characters in name', async () => {
    expect(
      () =>
        new User({
          bio: 'Some bio',
          name: 'a'.repeat(51),
          password: 'password123',
          user: 'johndoe',
        }).name,
    ).toThrow();
  });
  it('Should not have spaces in user', async () => {
    expect(
      () =>
        new User({
          bio: 'Some bio',
          name: 'John Doe',
          password: 'password123',
          user: 'john doe',
        }).name,
    ).toThrow();
  });
  it('Should require at least 4 characters in user', async () => {
    expect(
      () =>
        new User({
          bio: 'Some bio',
          name: 'John Doe',
          password: 'password123',
          user: 'aaa',
        }),
    ).toThrow();
  });
  it('Should require at least 4 characters in name', async () => {
    expect(
      () =>
        new User({
          name: 'aaa',
          bio: 'Some bio',
          password: 'password123',
          user: 'user123',
        }),
    ).toThrow();
  });
});
