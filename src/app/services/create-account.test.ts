import { BcryptService } from '@app/lib/bcrypt-service';
import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { CreateAccount } from './create-account';

describe('Create account', () => {
  let createAccount: CreateAccount;
  let usersRepository: InMemoryUsersRepository;

  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository();
    const encryptService = new BcryptService();
    createAccount = new CreateAccount(usersRepository, encryptService);
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
  it('Should fail since password is way too long', async () => {
    await expect(
      createAccount.do({
        bio: 'Some bio',
        name: 'John Doe',
        user: 'johndoe',
        password: 'a'.repeat(129),
      }),
    ).rejects.toThrow();
  });
  it('Should fail since password has less than 8 characters', async () => {
    await expect(
      createAccount.do({
        bio: 'Some bio',
        name: 'John Doe',
        user: 'johndoe',
        password: '1234567',
      }),
    ).rejects.toThrow();
  });
  it('Should fail since password has spaces', async () => {
    await expect(
      createAccount.do({
        bio: 'Some bio',
        name: 'John Doe',
        user: 'johndoe',
        password: 'password yes',
      }),
    ).rejects.toThrow();
  });
});
