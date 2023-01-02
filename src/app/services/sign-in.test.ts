import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { JwtMockService } from '@test/providers/jwt-mock-provider';
import { SignIn } from './sign-in';
import { User } from '@app/entities/user';
import { CreateAccount } from './create-account';
import { BcryptService } from '@app/providers/bcrypt-service';

describe('Sign-in', () => {
  let usersRepository: InMemoryUsersRepository;
  let signIn: SignIn;
  let mockUser: User;
  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository();
    const bcryptService = new BcryptService();
    const createAccount = new CreateAccount(usersRepository, bcryptService);
    signIn = new SignIn(new JwtMockService(), usersRepository);

    let { account } = await createAccount.do({
      bio: 'Some bio',
      name: 'John Doe',
      password: 'password123',
      user: 'johndoe',
    });
    mockUser = account;
  });
  it('Should be able to sign-in given the correct credentials', async () => {
    await expect(
      signIn.do({
        password: 'password123',
        user: mockUser.user,
      }),
    ).resolves.not.toThrow();
  });
  it('Should fail to sign-in given the wrong credentials', async () => {
    await expect(
      signIn.do({
        password: 'password124',
        user: mockUser.user,
      }),
    ).rejects.toThrow();
  });
  it('Should fail to sign-in given the a non-existent user', async () => {
    await expect(
      signIn.do({
        password: 'password123',
        user: 'randomuser',
      }),
    ).rejects.toThrow();
  });
});
