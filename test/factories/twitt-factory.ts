import { randomUUID } from 'node:crypto';

import { Twitt, type ITwittProps } from '@app/entities/twitt';

type Override = Partial<ITwittProps>;

export function makeTwitt(override: Override) {
  return new Twitt({
    content: `Auto-generated twitt #${Math.floor(Math.random() * 300)}`,
    authorId: randomUUID(),
    ...override,
  });
}
