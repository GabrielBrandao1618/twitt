import { AuthModule } from '@infra/auth/auth.module';
import { HttpModule } from '@infra/http/http.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule, AuthModule],
})
export class AppModule {}
