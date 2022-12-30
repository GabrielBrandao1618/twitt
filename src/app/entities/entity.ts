import { randomUUID } from 'node:crypto';

export class Entity<P> {
  protected _id: string;
  constructor(protected _props: P, id?: string) {
    this._id = id ?? randomUUID();
  }
}
