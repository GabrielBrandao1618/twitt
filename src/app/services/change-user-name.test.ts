import { makeUser } from '@test/factories/user-factory';
import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { ChangeUserName } from './change-user-name';

describe('Change user name', () => {
  it('Should be able to change user name', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const changeUserName = new ChangeUserName(usersRepository);
    const exampleUser = makeUser({});
    await usersRepository.create(exampleUser);
    await changeUserName.do({
      actorId: exampleUser.id,
      name: 'New name',
    });
    expect(usersRepository.users[0].name).toBe('New name');
  });
});
