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
  async handleCreateTwitt(@Request() req: CreateTwittDTO) {
    const { id: actorId } = req.user;
    const { createdTwitt } = await this.createTwitt.do({
      content: req.body.content,
      actorId: actorId,
    });
    return {
      content: createdTwitt.content,
      createdAt: createdTwitt.createdAt,
      updatedAt: createdTwitt.updatedAt,
      id: createdTwitt.id,
      authorId: createdTwitt.authorId,
    };
  }
}
