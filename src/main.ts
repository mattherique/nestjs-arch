import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { swaggerConfig } from './shared/common/swagger.config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const logger = new Logger('Main')
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  swaggerConfig(app)

  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  const config = app.get<ConfigService>(ConfigService)
  const port = config.get<number>('PORT')

  await app.listen(port ?? "3003", async () =>
    logger.log(`Server running at: http://localhost:${port}`
  ));
}
bootstrap();
