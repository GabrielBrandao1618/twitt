import { CreateAccount } from '@app/services/create-account';
import { Controller, Post, Body } from '@nestjs/common';
import { CreateAccountDTO } from '../dtos/create-account-dto';

@Controller({
  path: 'user',
})
export class UserController {
  constructor(private readonly createAccount: CreateAccount) {}
  @Post()
  async createUser(@Body() req: CreateAccountDTO) {
    const { account } = await this.createAccount.do({
      bio: req.bio,
      name: req.name,
      password: req.password,
      user: req.user,
    });
    return {
      name: account.name,
      user: account.user,
      id: account.id,
    };
  }
}
