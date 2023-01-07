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
  Req,
} from '@nestjs/common';
import { AuthRequestDTO } from '../dtos/auth-request-dto';
import { ChangeUserBioDTO } from '../dtos/change-user-bio-dto';
import { ChangeUserNameDTO } from '../dtos/change-user-name-dto';
import { ChangeUserPasswordDTO } from '../dtos/change-user-password-dto';
import { CreateAccountDTO } from '../dtos/create-account-dto';
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
  @UseGuards(JwtGuard)
  @Post('name')
  async handleChangeUserName(
    @Request() req: AuthRequestDTO,
    @Body() body: ChangeUserNameDTO,
  ) {
    const { result } = await this.changeUserName.do({
      actorId: req.user.id,
      name: body.name,
    });
    return HttpUserMapper.toHttp(result);
  }
  @UseGuards(JwtGuard)
  @Delete()
  async handleDeleteUser(@Request() req: AuthRequestDTO) {
    await this.deleteUser.do({
      actorId: req.user.id,
    });
  }

  @UseGuards(JwtGuard)
  @Post('bio')
  async handleChangeUserBio(
    @Request() req: AuthRequestDTO,
    @Body() body: ChangeUserBioDTO,
  ) {
    const { result } = await this.changeUserBio.do({
      actorId: req.user.id,
      bio: body.bio,
    });
    return HttpUserMapper.toHttp(result);
  }

  @UseGuards(JwtGuard)
  @Post('password')
  async handleChangeUserPassword(
    @Req() req: AuthRequestDTO,
    @Body() body: ChangeUserPasswordDTO,
  ) {
    const { result } = await this.changeUserPassword.do({
      actorId: req.user.id,
      password: body.password,
    });
    return HttpUserMapper.toHttp(result);
  }
}
