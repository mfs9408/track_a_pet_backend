import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
import { ChangeUserDataDto } from './dto/change-user-data.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User, // private roleService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    // @ts-ignore
    const user = await this.userRepository.create({ id: uuidv4(), ...dto });
    // const role = await this.roleService.getRoleByValue('ADMIN');
    // await user.$set('roles', [role.id]);
    // user.roles = ['USER'];
    user.isActivated = false;
    user.owning = 'owner';
    // user.pets = [];

    return user;
  }

  async changeUserData(dto: ChangeUserDataDto) {
    const user = await this.userRepository.findByPk(dto.id);

    const email = await this.userRepository.findOne({
      where: { email: dto.email },
    });

    if (email.email === dto.email) {
      user.name = dto.name;

      return { email: user.email, name: user.name };
    }

    if (email.email) {
      throw new HttpException('Email already exists', HttpStatus.CONFLICT);
    }

    user.email = dto.email;
    user.name = dto.name;

    return { email: user.email, name: user.name };
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });

    return users;
  }

  async getUsersByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });

    return user;
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepository.findByPk(dto.userID);
    // const role = await this.roleService.getRoleByValue(dto.value);

    // if (role && user) {
    //   await user.$add('role', role.id);
    //   return dto;
    // }

    throw new HttpException('User or role is not found', HttpStatus.NOT_FOUND);
  }

  async ban(dto: BanUserDto) {
    const user = await this.userRepository.findByPk(dto.userId);

    if (!user) {
      throw new HttpException(
        'User or role is not found',
        HttpStatus.NOT_FOUND,
      );
    }

    user.banned = true;
    user.banReason = dto.banReason;
    await user.save();

    return user;
  }
}
