import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { ConfigureModule } from './infrastructure/configure/configure.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [UserModule, ConfigureModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
