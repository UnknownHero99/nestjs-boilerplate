import { GardenDto } from '../../gardens/dto/garden.dto';

import {
  // decorators here

  IsString,
  IsNumber,
  IsOptional,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator';

import {
  // decorators here
  ApiProperty,
} from '@nestjs/swagger';

import {
  // decorators here
  Type,
} from 'class-transformer';

export class CreateGardenBedDto {
  @ApiProperty({
    required: false,
    type: () => GardenDto,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => GardenDto)
  @IsNotEmptyObject()
  garden?: GardenDto | null;

  @ApiProperty({
    required: false,
    type: () => Number,
  })
  @IsOptional()
  @IsNumber()
  width?: number | null;

  @ApiProperty({
    required: false,
    type: () => Number,
  })
  @IsOptional()
  @IsNumber()
  length?: number | null;

  @ApiProperty({
    required: true,
    type: () => String,
  })
  @IsString()
  name: string;

  // Don't forget to use the class-validator decorators in the DTO properties.
}
