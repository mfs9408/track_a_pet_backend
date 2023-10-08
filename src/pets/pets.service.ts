import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Pets } from './pets.model';

@Injectable()
export class PetsService {
  @InjectModel(Pets) private petsRepository: typeof Pets;
}
