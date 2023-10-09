import { forwardRef, Module } from '@nestjs/common';
import { AppInitController } from './app-init.contoller';

@Module({
  controllers: [AppInitController],
  providers: [],
  imports: [],
  exports: [],
})
export class AppInitModule {}
