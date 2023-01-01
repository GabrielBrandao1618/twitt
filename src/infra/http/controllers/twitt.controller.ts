import { CreateTwitt } from '@app/services/create-twitt';
import { EditTwitt } from '@app/services/edit-twitt';
import { JwtGuard } from '@infra/auth/guards/jwt.guard';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CreateTwittDTO } from '../dtos/create-twitt-dto';
import { EditTwittDTO } from '../dtos/edit-twitt-dto';
import { HttpTwittMapper } from '../http-mappers/http-twitt-mapper';

@Controller({
  path: 'twitt',
})
export class TwittController {
  constructor(
    private readonly createTwitt: CreateTwitt,
    private readonly editTwitt: EditTwitt,
  ) {}
  @UseGuards(JwtGuard)
  @Post()
  async handleCreateTwitt(@Request() req: CreateTwittDTO) {
    const { id: actorId } = req.user;
    const { createdTwitt } = await this.createTwitt.do({
      content: req.body.content,
      actorId: actorId,
    });
    return HttpTwittMapper.toHttp(createdTwitt);
  }
  @UseGuards(JwtGuard)
  @Post('edit')
  async handleEditTwitt(@Request() req: EditTwittDTO) {
    const { id: actorId } = req.user;
    const { result } = await this.editTwitt.do({
      twittId: req.body.id,
      actorId: actorId,
      content: req.body.content,
    });
    return HttpTwittMapper.toHttp(result);
  }
}
