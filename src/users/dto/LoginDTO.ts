import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class LoginDTO {
  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Incorrect email' })
  @ApiProperty({ example: 'foobar@gmail.com', description: 'email' })
  readonly email: string;

  @IsString({ message: 'Must be string' })
  @Length(4, 16, { message: 'MIn 4, max 16' })
  @ApiProperty({ example: 'password', description: 'password' })
  readonly password: string;
}
