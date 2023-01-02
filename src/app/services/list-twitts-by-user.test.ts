import { makeTwitt } from '@test/factories/twitt-factory';
import { InMemoryTwittsRepository } from '@test/repositories/in-memory-twitts-repository';
import { ListTwittsByUser } from './list-twitts-by-user';

describe('List twitts by user', () => {
  it('Should list correcly the twitts given a user id', async () => {
    const twittsRepository = new InMemoryTwittsRepository();
    await twittsRepository.create(makeTwitt({ authorId: 'aaaa' }));
    await twittsRepository.create(makeTwitt({ authorId: 'aaaa' }));
    await twittsRepository.create(makeTwitt({ authorId: 'aaaa' }));
    await twittsRepository.create(makeTwitt({ authorId: 'aaaa' }));
    await twittsRepository.create(makeTwitt({ authorId: 'bbbb' }));
    await twittsRepository.create(makeTwitt({ authorId: 'bbbb' }));
    const listTwittsByUser = new ListTwittsByUser(twittsRepository);

    const { twitts: twitts1 } = await listTwittsByUser.do({ userId: 'aaaa' });
    expect(twitts1).toHaveLength(4);
    const { twitts: twitts2 } = await listTwittsByUser.do({ userId: 'bbbb' });
    expect(twitts2).toHaveLength(2);
  });
});
