import { Controller, All } from '@nestjs/common';

@Controller()
export class AppController {
  @All()
  async root() {
    return {
      status: 'Server running',
    };
  }
}
