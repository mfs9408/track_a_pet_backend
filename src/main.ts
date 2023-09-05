import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UsePipes } from '@nestjs/common';
import { ValidationPipes } from './pipes/validation-pipes';

const bootstrap = async () => {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Backend')
    .setDescription('Documentation REST api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.useGlobalPipes(new ValidationPipes());

  await app.listen(PORT, () => console.log(`Server launched on ${PORT}`));
};

bootstrap();
