import { JwtService } from '@app/providers/jwt-service';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { SignInController } from './controllers/sign-in.controller';
import { SignIn } from '@app/services/sign-in';
import { UsersRepository } from '@app/repositories/users-repository';
import { PrismaUsersRepository } from '@infra/database/prisma/repositories/prisma-users-repository';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  controllers: [SignInController],
  providers: [
    {
      provide: JwtService,
      useClass: NestJwtService,
    },
    SignIn,
  ],
  imports: [DatabaseModule],
})
export class AuthModule {}
