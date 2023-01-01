import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { JwtMockService } from '@test/providers/jwt-mock-provider';
import { SignIn } from './sign-in';
import { User } from '@app/entities/user';

describe('Sign-in', () => {
  let usersRepository: InMemoryUsersRepository;
  let signIn: SignIn;
  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository();
    signIn = new SignIn(new JwtMockService(), usersRepository);

    usersRepository.users = [
      new User({
        bio: 'Some bio',
      }),
    ];
  });
  it('Should be able to sign-in given the correct credentials', async () => {});
});
