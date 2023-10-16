import { Module } from '@nestjs/common';
import { LibraryController } from './library.controller';
import { LibraryService } from './library.service';

@Module({
  controllers: [LibraryController],
  providers: [LibraryService],
  imports: [],
  exports: [LibraryService],
})
export class LibraryModule {}
