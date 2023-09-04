import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationAttrs {
  email: string;
  password: string;
  name: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'User ID' })
  @Column({
    type: DataType.STRING,
    unique: true,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({ example: 'foobar@gmail.com', description: 'email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: 'Fedor Muratidi', description: 'name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 'true', description: 'Is user activated' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isActivated: boolean;

  @ApiProperty({ example: 'owning', description: 'Owner' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  owning: string;

  @ApiProperty({ example: 'password', description: 'password' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: true, description: 'banned?' })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  banReason: string;

  // @BelongsToMany(() => RoleTable, () => UserRolesModel)
  // roles: RoleTable[];

  // @HasMany(() => PetTable)
  // pets: PetTable[];
}
