import { CreateTwitt } from '@app/services/create-twitt';
import { EditTwitt } from '@app/services/edit-twitt';
import { ListTwitts } from '@app/services/list-twitts';
import { JwtGuard } from '@infra/auth/guards/jwt.guard';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateTwittDTO } from '../dtos/create-twitt-dto';
import { EditTwittDTO } from '../dtos/edit-twitt-dto';
import { ListTwittsDTO } from '../dtos/list-twitts-dto';
import { HttpTwittMapper } from '../http-mappers/http-twitt-mapper';

@Controller({
  path: 'twitt',
})
export class TwittController {
  constructor(
    private readonly createTwitt: CreateTwitt,
    private readonly editTwitt: EditTwitt,
    private readonly listTwitts: ListTwitts,
  ) {}
  @UseGuards(JwtGuard)
  @Get()
  async handleListTwitts(@Query() params: ListTwittsDTO) {
    const { twitts } = await this.listTwitts.do({
      amount: params.amount,
      page: params.page,
    });
    return twitts.map(HttpTwittMapper.toHttp);
  }
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
