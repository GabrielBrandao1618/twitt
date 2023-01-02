import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';

import { CreateAccount } from '@app/services/create-account';

import { AppController } from './controllers/app.controller';
import { UserController } from './controllers/user.controller';
import { TwittController } from './controllers/twitt.controller';
import { CreateTwitt } from '@app/services/create-twitt';
import { JwtStrategy } from '@infra/auth/passport/jwt/jwt-strategy';
import { EditTwitt } from '@app/services/edit-twitt';
import { ListTwitts } from '@app/services/list-twitts';
import { ListTwittsByUser } from '@app/services/list-twitts-by-user';
import { BcryptService } from '@app/lib/bcrypt-service';
import { EncryptService } from '@app/providers/encrypt-service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, UserController, TwittController],
  providers: [
    CreateAccount,
    CreateTwitt,
    JwtStrategy,
    EditTwitt,
    ListTwitts,
    ListTwittsByUser,
    {
      provide: EncryptService,
      useClass: BcryptService,
    },
  ],
})
export class HttpModule {}
