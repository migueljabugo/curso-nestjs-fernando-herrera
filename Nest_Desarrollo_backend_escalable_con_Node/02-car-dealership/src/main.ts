import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Elimina la información que no esté expecificada en el DTO.
      forbidNonWhitelisted: true, //Devuelve un error cuando se recibe información adicional a la que define el DTO
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
