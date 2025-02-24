import { GardenBed } from '../../garden-beds/domain/garden-bed';
import { Seed } from '../../seeds/domain/seed';
import { ApiProperty } from '@nestjs/swagger';

export class Plant {
  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  notes?: string | null;

  @ApiProperty({
    type: () => GardenBed,
    nullable: false,
  })
  location: GardenBed;

  @ApiProperty({
    type: () => Number,
    nullable: false,
  })
  quantity: number;

  @ApiProperty({
    type: () => Date,
    nullable: false,
  })
  planting_date: Date;

  @ApiProperty({
    type: () => Seed,
    nullable: false,
  })
  seed: Seed;

  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
