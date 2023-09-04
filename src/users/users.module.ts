import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User]),
    SequelizeModule.forFeature([User]),
    // SequelizeModule.forFeature([User, RoleTable, UserRolesModel, PetTable]),
    // RolesModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}
