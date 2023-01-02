import { makeUser } from '@test/factories/user-factory';
import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { ChangeUserBio } from './change-user-bio';

describe('Change user bio', () => {
  it('Should be able to change user bio', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const changeUserBio = new ChangeUserBio(usersRepository);

    const exampleUser = makeUser({});
    await usersRepository.create(exampleUser);
    await changeUserBio.do({
      actorId: exampleUser.id,
      bio: 'New bio',
    });
    expect(usersRepository.users[0].bio).toBe('New bio');
  });
});
