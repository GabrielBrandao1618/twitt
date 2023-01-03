import { IsNotEmpty } from 'class-validator';

export class ChangeUserBioDTO {
  @IsNotEmpty()
  bio: string;
}
