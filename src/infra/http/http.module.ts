import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';

import { CreateAccount } from '@app/services/create-account';

import { AppController } from './controllers/app.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [CreateAccount],
})
export class HttpModule {}
