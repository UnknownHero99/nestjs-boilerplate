import { GardenBedDto } from '../../garden-beds/dto/garden-bed.dto';

import { SeedDto } from '../../seeds/dto/seed.dto';

import {
  // decorators here
  Type,
  Transform,
} from 'class-transformer';

import {
  // decorators here

  ValidateNested,
  IsNotEmptyObject,
  IsDate,
  IsNumber,
  IsString,
  IsOptional,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

export class CreatePlantDto {
  @ApiProperty({
    required: false,
    type: () => String,
  })
  @IsOptional()
  @IsString()
  notes?: string | null;

  @ApiProperty({
    required: true,
    type: () => GardenBedDto,
  })
  @ValidateNested()
  @Type(() => GardenBedDto)
  @IsNotEmptyObject()
  location: GardenBedDto;

  @ApiProperty({
    required: true,
    type: () => Number,
  })
  @IsNumber()
  quantity: number;

  @ApiProperty({
    required: true,
    type: () => Date,
  })
  @Transform(({ value }) => new Date(value))
  @IsDate()
  planting_date: Date;

  @ApiProperty({
    required: true,
    type: () => SeedDto,
  })
  @ValidateNested()
  @Type(() => SeedDto)
  @IsNotEmptyObject()
  seed: SeedDto;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
