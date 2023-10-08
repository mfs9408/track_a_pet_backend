import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import { Pets } from './pets.model';

@Module({
  controllers: [PetsController],
  providers: [PetsService],
  imports: [
    SequelizeModule.forFeature([Pets]),
    // SequelizeModule.forFeature([User, RoleTable, UserRolesModel, PetTable]),
    // RolesModule,
  ],
  exports: [PetsService],
})
export class UsersModule {}
