import { Replace } from '@helpers/replace';
import { Entity } from './entity';

interface IUserProps {
  name: string;
  user: string;
  password: string;
  createdAt: Date;
  bio: string;
}

export class User extends Entity<IUserProps> {
  constructor(props: Replace<IUserProps, { createdAt?: Date }>, id?: string) {
    super(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );
  }

  get name() {
    return this._props.name;
  }
  set name(name: string) {
    this._props.name = name;
  }
  get user() {
    return this._props.user;
  }
  get password() {
    return this._props.password;
  }
  set password(password: string) {
    this._props.password = password;
  }
  get createdAt() {
    return this._props.createdAt;
  }
  get bio() {
    return this._props.bio;
  }
  set bio(bio: string) {
    this._props.bio = bio;
  }
}
