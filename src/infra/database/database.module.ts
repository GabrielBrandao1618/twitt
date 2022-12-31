import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repository';
import { PrismaTwittsRepository } from './prisma/repositories/prisma-twitts-repository';
import { UsersRepository } from '@app/repositories/users-repository';
import { TwittsRepository } from '@app/repositories/twitts-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: TwittsRepository,
      useClass: PrismaTwittsRepository,
    },
  ],
  exports: [UsersRepository, TwittsRepository],
})
export class DatabaseModule {}
