import { InMemoryTwittsRepository } from '@test/repositories/in-memory-twitts-repository';
import { CreateTwitt } from './create-twitt';

describe('Create twitt', () => {
  let twittsRepository: InMemoryTwittsRepository;
  let createTwitt: CreateTwitt;
  beforeEach(async () => {
    twittsRepository = new InMemoryTwittsRepository();
    createTwitt = new CreateTwitt(twittsRepository);
  });
  it('Should be able to create a twitt', async () => {
    await expect(
      createTwitt.do({
        actorId: 'aaaa',
        content: 'Some content',
      }),
    ).resolves.not.toThrow();
    expect(twittsRepository.twitts).toHaveLength(1);
  });
});
