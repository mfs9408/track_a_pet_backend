import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';

@ApiTags()
@Controller('post')
export class PetsController {
  constructor() {}
}
