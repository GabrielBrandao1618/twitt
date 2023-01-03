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
import { DeleteTwitt } from '@app/services/delete-twitt';
import { DeleteUser } from '@app/services/delete-user';
import { ChangeUserBio } from '@app/services/change-user-bio';
import { ChangeUserName } from '@app/services/change-user-name';
import { ChangeUserPassword } from '@app/services/change-user-password';

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
    DeleteTwitt,
    DeleteUser,
    ChangeUserBio,
    ChangeUserName,
    ChangeUserPassword,
    {
      provide: EncryptService,
      useClass: BcryptService,
    },
  ],
})
export class HttpModule {}
