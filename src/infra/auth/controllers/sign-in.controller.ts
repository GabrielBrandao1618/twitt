import { Body, Controller, Post } from '@nestjs/common';

import { SignInDTO } from '../dtos/sign-in-dto';
import { SignIn } from '@app/services/sign-in';

@Controller('auth')
export class SignInController {
  constructor(private readonly signInService: SignIn) {}
  @Post('sign-in')
  async signIn(@Body() req: SignInDTO) {
    const { access_token } = await this.signInService.do({
      password: req.password,
      user: req.user,
    });

    return {
      access_token,
    };
  }
}
