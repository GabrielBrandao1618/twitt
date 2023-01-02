import { makeUser } from '@test/factories/user-factory';
import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { DeleteUser } from './delete-user';

describe('Delete user', () => {
  it('Should be able to delete a user', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const deleteUser = new DeleteUser(usersRepository);

    const exampleUser = makeUser({});
    const exampleUser2 = makeUser({});
    await usersRepository.create(exampleUser);
    await usersRepository.create(exampleUser2);
    await expect(
      deleteUser.do({
        actorId: exampleUser.id,
      }),
    ).resolves.not.toThrow();

    expect(usersRepository.users).toHaveLength(1);
  });
});
