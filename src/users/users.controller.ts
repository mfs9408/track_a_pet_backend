import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDTO: CreateUserDto) {
    return this.usersService.createUser(userDTO);
  }

  @ApiOperation({ summary: 'Get user' })
  @ApiResponse({ status: 200, type: User })
  @Post('/user')
  getUserData(@Body() user: { email: string }) {
    return this.usersService.getUsersByEmail(user.email);
  }

  @ApiOperation({ summary: 'All user' })
  @ApiResponse({ status: 200, type: [User] })
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  // @ApiOperation({ summary: 'Give a role' })
  // @ApiResponse({ status: 200 })
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  // @Post('/role')
  // addRole(@Body() dto: AddRoleDto) {
  //   return this.usersService.addRole(dto);
  // }
  //
  // @ApiOperation({ summary: 'Give a role' })
  // @ApiResponse({ status: 200 })
  // @Roles('ADMIN')
  // @UseGuards(RolesGuard)
  // @Post('/ban')
  // banUser(@Body() dto: BanUserDto) {
  //   return this.usersService.ban(dto);
  // }
}
