import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';

import { SignInDTO } from '../dtos/sign-in-dto';
import { SignIn } from '@app/services/auth/sign-in';
import { JwtRefreshGuard } from '../guards/jwt-refresh.guard';
import { AuthRequestDTO } from '@infra/http/dtos/auth-request-dto';
import { RefreshSignIn } from '@app/services/auth/refresh-sign-in';

@Controller('auth')
export class SignInController {
  constructor(
    private readonly signInService: SignIn,
    private readonly refreshSignInService: RefreshSignIn,
  ) {}
  @Post('sign-in')
  async signIn(@Body() req: SignInDTO) {
    const { refresh_token } = await this.signInService.do({
      password: req.password,
      user: req.user,
    });

    return {
      refresh_token,
    };
  }
  @Post('refresh')
  @UseGuards(JwtRefreshGuard)
  async refresh(@Req() req: AuthRequestDTO) {
    const { user } = req;
    const { access_token } = await this.refreshSignInService.do({
      payload: user,
    });
    return {
      access_token,
    };
  }
}
