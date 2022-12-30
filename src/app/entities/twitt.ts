import { Replace } from 'src/helpers/replace';
import { Entity } from './entity';

interface ITwittProps {
  content: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Twitt extends Entity<ITwittProps> {
  constructor(
    props: Replace<ITwittProps, { createdAt?: Date; updatedAt?: Date }>,
    id?: string,
  ) {
    super(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
      id,
    );
  }

  get content() {
    return this._props.content;
  }
  set content(content: string) {
    this._props.content = content;
    this._props.updatedAt = new Date();
  }

  get userId() {
    return this._props.userId;
  }
  get createdAt() {
    return this._props.createdAt;
  }
  get updatedAt() {
    return this._props.updatedAt;
  }
}
