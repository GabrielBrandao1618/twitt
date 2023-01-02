import { makeTwitt } from '@test/factories/twitt-factory';
import { InMemoryTwittsRepository } from '@test/repositories/in-memory-twitts-repository';
import { ListTwitts } from './list-twitts';

describe('List twitts', () => {
  it('Should be able to list twitts given a amount and a page', async () => {
    const twittsRepository = new InMemoryTwittsRepository();

    for (let i = 0; i < 50; i++) {
      await twittsRepository.create(makeTwitt({}));
    }

    const listTwitts = new ListTwitts(twittsRepository);
    const { twitts: twitts1 } = await listTwitts.do({ amount: 30, page: 1 });
    expect(twitts1).toHaveLength(30);

    const { twitts: twitts2 } = await listTwitts.do({ amount: 30, page: 2 });
    expect(twitts2).toHaveLength(20);
  });
});
