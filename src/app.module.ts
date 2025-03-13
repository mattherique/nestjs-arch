import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ConfigureModule } from './infrastructure/configure/configure.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
  imports: [UserModule, ConfigureModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
