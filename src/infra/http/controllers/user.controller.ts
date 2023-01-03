import { ChangeUserBio } from '@app/services/change-user-bio';
import { ChangeUserName } from '@app/services/change-user-name';
import { ChangeUserPassword } from '@app/services/change-user-password';
import { CreateAccount } from '@app/services/create-account';
import { DeleteUser } from '@app/services/delete-user';
import { JwtGuard } from '@infra/auth/guards/jwt.guard';
import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Delete,
} from '@nestjs/common';
import { ChangeUserNameDTO } from '../dtos/change-user-name-dto';
import { CreateAccountDTO } from '../dtos/create-account-dto';
import { DeleteUserDTO } from '../dtos/delete-user-dto';
import { HttpUserMapper } from '../http-mappers/http-user-mapper';

@Controller({
  path: 'user',
})
export class UserController {
  constructor(
    private readonly createAccount: CreateAccount,
    private readonly deleteUser: DeleteUser,
    private readonly changeUserName: ChangeUserName,
    private readonly changeUserPassword: ChangeUserPassword,
    private readonly changeUserBio: ChangeUserBio,
  ) {}
  @UseGuards(JwtGuard)
  @Post()
  async createUser(@Body() req: CreateAccountDTO) {
    const { account } = await this.createAccount.do({
      bio: req.bio,
      name: req.name,
      password: req.password,
      user: req.user,
    });
    return HttpUserMapper.toHttp(account);
  }
  @Post('name')
  async handleChangeUserName(@Request() req: ChangeUserNameDTO) {
    const { result } = await this.changeUserName.do({
      actorId: req.user.id,
      name: req.body.name,
    });
    return HttpUserMapper.toHttp(result);
  }
  @UseGuards(JwtGuard)
  @Delete()
  async handleDeleteUser(@Request() req: DeleteUserDTO) {
    await this.deleteUser.do({
      actorId: req.user.id,
    });
  }
}
