import { Twitt } from '@app/entities/twitt';
import { InMemoryTwittsRepository } from '@test/repositories/in-memory-twitts-repository';
import { EditTwitt } from './edit-twitt';

describe('Edit twitt', () => {
  let twittsRepository: InMemoryTwittsRepository;
  let editTwitt: EditTwitt;
  beforeEach(async () => {
    twittsRepository = new InMemoryTwittsRepository();
    editTwitt = new EditTwitt(twittsRepository);
    await twittsRepository.create(
      new Twitt(
        {
          content: 'Some content',
          authorId: 'aaaa',
        },
        'bbbb',
      ),
    );
  });
  it('Should be able to edit a twitt', async () => {
    await expect(
      editTwitt.do({
        twittId: 'bbbb',
        actorId: 'aaaa',
        content: 'Some new content',
      }),
    ).resolves.not.toThrow();
    expect(twittsRepository.twitts[0].content).toBe('Some new content');
  });
  it('Only the author should be able to edit a twitt', async () => {
    await expect(
      editTwitt.do({
        twittId: 'bbbb',
        actorId: 'abab',
        content: 'It does not matter',
      }),
    ).rejects.toThrow();
  });
});
