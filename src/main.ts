import { appConfig } from './config/app';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(appConfig.PORT);
  console.log('Listening at', appConfig.PORT);
}
bootstrap();
