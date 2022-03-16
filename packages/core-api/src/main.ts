import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3500', 'http://172.30.1.15:3500'],
  });
  await app.listen(4000);
}

bootstrap().then();
