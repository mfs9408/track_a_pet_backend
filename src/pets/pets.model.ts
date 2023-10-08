import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';

@Table({ tableName: 'pets' })
export class Pets extends Model<Pets> {
  @ApiProperty({ example: '1', description: 'Pet ID' })
  @Column({
    type: DataType.STRING,
    unique: true,
    primaryKey: true,
  })
  id: string;

  @HasOne(() => User)
  userId: string;

  @ApiProperty({ example: 'Foo', description: 'Pet name' })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  petType: object;

  @ApiProperty({ example: 'color', description: 'Orange' })
  @Column({
    type: DataType.STRING,
  })
  color: string;

  @ApiProperty({ example: 'Weight', description: '3.4' })
  @Column({
    type: DataType.STRING,
  })
  weight: string;

  @ApiProperty({ example: 'Age', description: 'Adult' })
  @Column({
    type: DataType.STRING,
  })
  age: string;

  @ApiProperty({ example: 'Breed', description: 'Abyssinian cat' })
  @Column({
    type: DataType.STRING,
  })
  breed: string;

  @ApiProperty({ example: 'spayed', description: 'Sprayed pet' })
  @Column({
    type: DataType.BOOLEAN,
  })
  spayed: boolean;

  @ApiProperty({ example: 'Gender', description: 'male' })
  @Column({
    type: DataType.STRING,
  })
  gender: string;

  @ApiProperty({ example: 'Description', description: 'anything' })
  @Column({
    type: DataType.STRING,
  })
  description: string;

  // image: [];
  //
  // petStatus: object;
  //
  // loseDate: string;
  //
  // remindIDs: string[];
  //
  // identification: object;
  //
  // medicalInformation: object;
  //
  // vaccination: [];
  //
  // veterinarianInfo: object;

  @ApiProperty({ example: 'Date', description: '01.01.23' })
  @Column({
    type: DataType.STRING,
  })
  birthDay: string;

  @ApiProperty({ example: 'Insurance number', description: '123' })
  @Column({
    type: DataType.STRING,
  })
  insurance: string;

  @ApiProperty({ example: 'Description', description: '123' })
  @Column({
    type: DataType.STRING,
  })
  diet: string;

  @ApiProperty({ example: 'Description', description: '123' })
  @Column({
    type: DataType.STRING,
  })
  loseAddress: string;
}
