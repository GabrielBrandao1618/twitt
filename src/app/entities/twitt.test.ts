import { Twitt } from './twitt';

describe('Twitt entity tests', () => {
  it('Should be able to create a twitt', () => {
    const twitt = new Twitt({
      content: 'Hello guys!',
      authorId: 'aaaa',
    });
    expect(twitt.content).toBe('Hello guys!');
  });
  it('Should update properties correcly', async () => {
    const twitt = new Twitt({
      content: 'Hello guys!',
      authorId: 'aaaa',
    });
    const initialUpdatedAt = twitt.updatedAt;
    twitt.content = 'Hello';
    expect(twitt.content).toBe('Hello');
    expect(twitt.updatedAt).not.toBe(initialUpdatedAt);
  });
  it('Should have a limit of 255 characters', async () => {
    expect(
      () =>
        new Twitt({
          content: 'a'.repeat(256),
          authorId: 'aaaa',
        }),
    ).toThrow();
  });
});
