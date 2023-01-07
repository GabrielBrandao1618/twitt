import { JwtService } from '@app/providers/jwt-service';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { SignInController } from './controllers/sign-in.controller';
import { SignIn } from '@app/services/auth/sign-in';
import { DatabaseModule } from '@infra/database/database.module';
import { JwtRefreshService } from '@app/providers/jwt-refresh-service';
import { RefreshSignIn } from '@app/services/auth/refresh-sign-in';

@Module({
  controllers: [SignInController],
  providers: [
    {
      provide: JwtService,
      useValue: new NestJwtService({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '1m',
        },
      }),
    },
    {
      provide: JwtRefreshService,
      useValue: new NestJwtService({
        secret: process.env.JWT_REFRESH_SECRET,
        signOptions: {
          expiresIn: '7d',
        },
      }),
    },
    RefreshSignIn,
    SignIn,
  ],
  imports: [DatabaseModule],
})
export class AuthModule {}
