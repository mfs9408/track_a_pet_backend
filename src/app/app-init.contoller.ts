import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('app')
@Controller('app')
export class AppInitController {
  @Get('/init')
  initApp() {
    return {
      version: '1.0.0',
      updateRequired: false,
      link: 'foo',
    };
  }
}
