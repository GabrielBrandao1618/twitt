import {Controller, Post} from '@nestjs/common'

@Controller({
  path: 'user'
})
export class UserController {
  constructor() {}
  @Post()
  async createUser(){
    return '';
  }
}
