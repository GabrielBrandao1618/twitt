import { Replace } from '@helpers/replace';
import { Entity } from './entity';

export interface IUserProps {
  name: string;
  user: string;
  password: string;
  createdAt: Date;
  bio: string;
}

export class User extends Entity<IUserProps> {
  constructor(props: Replace<IUserProps, { createdAt?: Date }>, id?: string) {
    if (props.bio.length > 255) {
      throw new Error('Bio cannot be greater than 255 characters');
    }
    if (props.name.length > 50) {
      throw new Error('Name should not be greater than 50 characters');
    }
    if (props.name.length < 4) {
      throw new Error('Name should have at least 4 characters');
    }
    if (props.user.length > 20) {
      throw new Error('User should not be greater than 20 characters');
    }
    if (props.user.length < 4) {
      throw new Error('User should have at least 4 characters');
    }
    if (props.user.includes(' ')) {
      throw new Error('User should not contain spaces');
    }
    super(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    );
  }

  get id() {
    return this._id;
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
