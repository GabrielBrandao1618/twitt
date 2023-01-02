import { Replace } from '@helpers/replace';
import { Entity } from './entity';

export interface ITwittProps {
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Twitt extends Entity<ITwittProps> {
  constructor(
    props: Replace<ITwittProps, { createdAt?: Date; updatedAt?: Date }>,
    id?: string,
  ) {
    if (props.content.length > 255) {
      throw new Error('Twitt content should not be greater than 255');
    }
    super(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
      id,
    );
  }

  get id() {
    return this._id;
  }

  get content() {
    return this._props.content;
  }
  set content(content: string) {
    this._props.content = content;
    this._props.updatedAt = new Date();
  }

  get authorId() {
    return this._props.authorId;
  }
  get createdAt() {
    return this._props.createdAt;
  }
  get updatedAt() {
    return this._props.updatedAt;
  }
}
