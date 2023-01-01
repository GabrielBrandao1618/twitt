import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';

import { CreateAccount } from '@app/services/create-account';

import { AppController } from './controllers/app.controller';
import { UserController } from './controllers/user.controller';
import { TwittController } from './controllers/twitt.controller';
import { CreateTwitt } from '@app/services/create-twitt';
import { JwtStrategy } from '@infra/auth/passport/jwt/jwt-strategy';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, UserController, TwittController],
  providers: [CreateAccount, CreateTwitt, JwtStrategy],
})
export class HttpModule {}
