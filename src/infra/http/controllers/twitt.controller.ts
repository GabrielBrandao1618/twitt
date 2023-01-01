import { CreateTwitt } from '@app/services/create-twitt';
import { JwtGuard } from '@infra/auth/guards/jwt.guard';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateTwittDTO } from '../dtos/create-twitt-dto';

@Controller({
  path: 'twitt',
})
export class TwittController {
  constructor(private readonly createTwitt: CreateTwitt) {}
  @UseGuards(JwtGuard)
  @Post()
  async handleCreateTwitt(@Request() req) {
    console.log(req.body);
  }
}
