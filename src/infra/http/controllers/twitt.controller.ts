import { CreateTwitt } from '@app/services/create-twitt';
import { DeleteTwitt } from '@app/services/delete-twitt';
import { EditTwitt } from '@app/services/edit-twitt';
import { ListTwitts } from '@app/services/list-twitts';
import { ListTwittsByUser } from '@app/services/list-twitts-by-user';
import { JwtGuard } from '@infra/auth/guards/jwt.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthRequestDTO } from '../dtos/auth-request-dto';
import { CreateTwittDTO } from '../dtos/create-twitt-dto';
import { DeleteTwittDTO } from '../dtos/delete-twitt-dto';
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
    private readonly listTwittsByUser: ListTwittsByUser,
    private readonly deleteTwitt: DeleteTwitt,
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
  async handleCreateTwitt(
    @Request() req: AuthRequestDTO,
    @Body() body: CreateTwittDTO,
  ) {
    const { id: actorId } = req.user;
    const { createdTwitt } = await this.createTwitt.do({
      content: body.content,
      actorId: actorId,
    });
    return HttpTwittMapper.toHttp(createdTwitt);
  }
  @UseGuards(JwtGuard)
  @Post('edit')
  async handleEditTwitt(
    @Request() req: AuthRequestDTO,
    @Body() body: EditTwittDTO,
  ) {
    const { id: actorId } = req.user;
    const { result } = await this.editTwitt.do({
      twittId: body.id,
      actorId: actorId,
      content: body.content,
    });
    return HttpTwittMapper.toHttp(result);
  }
  @Get(':userId')
  @UseGuards(JwtGuard)
  async handleListTwittsByUser(@Param('userId') userId: string) {
    const { twitts } = await this.listTwittsByUser.do({
      userId: userId,
    });
    return twitts.map(HttpTwittMapper.toHttp);
  }
  @Delete()
  @UseGuards(JwtGuard)
  async handleDeleteTwitt(
    @Request() req: AuthRequestDTO,
    @Body() body: DeleteTwittDTO,
  ) {
    await this.deleteTwitt.do({
      actorId: req.user.id,
      twittId: body.twittId,
    });
  }
}
