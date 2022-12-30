import { Twitt } from './twitt';

describe('Twitt entity tests', () => {
  it('Should be able to create a twitt', () => {
    const twitt = new Twitt({
      content: 'Hello guys!',
      userId: 'aaaa',
    });
    expect(twitt.content).toBe('Hello guys!');
  });
  it('Should update informations correcly', async () => {
    const twitt = new Twitt({
      content: 'Hello guys!',
      userId: 'aaaa',
    });
    twitt.content = 'Hello';
    expect(twitt.content).toBe('Hello');
  });
});
