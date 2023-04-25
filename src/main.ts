import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { EnvVariables } from './infrastructure/config/env/env-variables.enum';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.enableCors();

  app.setGlobalPrefix(configService.get(EnvVariables.APPLICATION_CONTEXT_PATH));
  await app.listen(configService.get(EnvVariables.APPLICATION_PORT));
  console.log(
    'listen port in ',
    configService.get(EnvVariables.APPLICATION_PORT),
  );
}
bootstrap();
