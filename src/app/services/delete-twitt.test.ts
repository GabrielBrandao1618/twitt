import { makeTwitt } from '@test/factories/twitt-factory';
import { InMemoryTwittsRepository } from '@test/repositories/in-memory-twitts-repository';
import { DeleteTwitt } from './delete-twitt';

describe('Delete twitt', () => {
  let twittsRepository: InMemoryTwittsRepository;
  let deleteTwitt: DeleteTwitt;
  beforeEach(async () => {
    twittsRepository = new InMemoryTwittsRepository();
    deleteTwitt = new DeleteTwitt(twittsRepository);
  });
  it('Should be able to delete a twitt', async () => {
    const exampleTwitt = makeTwitt({ authorId: 'aaaa' });
    await twittsRepository.create(exampleTwitt);
    await expect(
      deleteTwitt.do({
        actorId: 'aaaa',
        twittId: exampleTwitt.id,
      }),
    ).resolves.not.toThrow();
  });
  it('Should not be able to delete a twitt since actor is not the author', async () => {
    const exampleTwitt = makeTwitt({ authorId: 'aaaa' });
    await twittsRepository.create(exampleTwitt);
    await expect(
      deleteTwitt.do({
        actorId: 'bbbb',
        twittId: exampleTwitt.id,
      }),
    ).rejects.toThrow();
  });
});
