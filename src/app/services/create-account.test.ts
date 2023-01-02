import { BcryptService } from '@app/providers/bcrypt-service';
import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { CreateAccount } from './create-account';

describe('Create account', () => {
  let createAccount: CreateAccount;
  let usersRepository: InMemoryUsersRepository;

  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository();
    const bcryptService = new BcryptService();
    createAccount = new CreateAccount(usersRepository, bcryptService);
  });

  it('Should be able to create an account', async () => {
    await expect(
      createAccount.do({
        bio: 'Some bio',
        name: 'John Doe',
        user: 'johndoe',
        password: 'password123',
      }),
    ).resolves.not.toThrow();
    expect(usersRepository.users).toHaveLength(1);
  });
});
