import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class ChangeUserDataDto {
  @IsString({ message: 'Must be string' })
  @ApiProperty({ example: 'UUID', description: 'UUID' })
  readonly id: string;

  @IsString({ message: 'Must be string' })
  @IsEmail({}, { message: 'Incorrect email' })
  @ApiProperty({ example: 'foobar@gmail.com', description: 'email' })
  readonly email: string;

  @IsString({ message: 'Must be string' })
  @ApiProperty({ example: 'Fedor Muratidi', description: 'Name' })
  readonly name: string;
}
