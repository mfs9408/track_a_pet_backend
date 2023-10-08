import { IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddPetDto {
  @IsString({ message: 'Must be string' })
  @ApiProperty({ example: 'UUID', description: 'ID – uuid' })
  readonly id: string;

  @IsString({ message: 'Must be string' })
  @ApiProperty({ example: 'UUID', description: 'ID – uuid' })
  readonly userId: string;

  readonly petType: {
    id: string;
    value: string;
  };
  readonly color: string;
  readonly weight: string;
  readonly age: string;
  readonly breed?: string;
  readonly avatar?: string;
  readonly spayed?: boolean;
  readonly gender?: string;
  readonly description?: string;
  // image?: Asset[] | null;
  loseAddress?: {
    readonly street: string;
  };
  petStatus: {
    readonly value: string;
    readonly id: string;
  };
  readonly loseDate?: string;
  readonly remindIDs?: number[];
  readonly birthDay?: string;
  readonly insurance?: string;
  readonly activityHistory?: any;
  readonly diet?: string;
  medicalInformation?: {
    readonly allergies?: string;
    readonly medications?: string;
  };
  identification?: {
    readonly microchip?: string;
    readonly description?: string;
  };
}
