import { randomUUID } from 'node:crypto';

import { JwtMockService } from '@test/providers/jwt-mock-provider';
import { RefreshSignIn } from './refresh-sign-in';

describe('Refresh sign-in', () => {
  it('Should successfully refresh sign-in', async () => {
    const refreshSignIn = new RefreshSignIn(new JwtMockService());

    await expect(
      refreshSignIn.do({
        payload: {
          id: randomUUID(),
          user: 'johndoe',
        },
      }),
    ).resolves.toBeDefined();
  });
});
