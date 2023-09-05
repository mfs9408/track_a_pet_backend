import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/users.model';
import { LoginDTO } from '../users/dto/LoginDTO';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async login(userDto: LoginDTO) {
    const user = await this.validateUser(userDto);

    return this.generateToken(user);
  }

  private async validateUser(userDTO: CreateUserDto | LoginDTO) {
    const user = await this.userService.getUsersByEmail(userDTO.email);
    const passwordEquals = await bcrypt.compare(
      userDTO.password,
      user.password,
    );

    if (user && passwordEquals) {
      return user;
    }

    throw new UnauthorizedException({ message: 'Incorrect email or password' });
  }

  async registration(userDto: CreateUserDto) {
    const newUser = await this.userService.getUsersByEmail(userDto.email);

    if (newUser) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(userDto.password, 5);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });

    return this.generateToken(user);
  }

  async generateToken(user: User) {
    const payload = {
      email: user.email,
      id: user.id,
      name: user.name,
    };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
