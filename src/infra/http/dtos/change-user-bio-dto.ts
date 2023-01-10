import { IsNotEmpty, Length } from 'class-validator';

export class ChangeUserBioDTO {
  @IsNotEmpty()
  @Length(0, 255)
  bio: string;
}
