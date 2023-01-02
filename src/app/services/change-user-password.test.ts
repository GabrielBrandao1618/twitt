import { BcryptService } from '@app/providers/bcrypt-service';
import { makeUser } from '@test/factories/user-factory';
import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { ChangeUserPassword } from './change-user-password';

describe('Change user password', () => {
  it('Should be able to change user password', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const bcryptService = new BcryptService();
    console.log(bcryptService);
    const changeUserPassword = new ChangeUserPassword(
      usersRepository,
      bcryptService,
    );
    const exampleUser = makeUser({});
    const initialPassword = exampleUser.password;
    await usersRepository.create(exampleUser);
    await changeUserPassword.do({
      password: 'newpasswordhere',
      actorId: exampleUser.id,
    });
    expect(usersRepository.users[0].password).not.toBe(initialPassword);
    expect(usersRepository.users[0].password).not.toBe('newpasswordhere');
    const isCorrect = bcryptService.compare(
      'newpasswordhere',
      usersRepository.users[0].password,
    );
    expect(isCorrect).toBeTruthy();
  });
});
