import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PlantDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;
}
