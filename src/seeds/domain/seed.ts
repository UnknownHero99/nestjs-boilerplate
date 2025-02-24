import { ApiProperty } from '@nestjs/swagger';

export class Seed {
  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  notes?: string | null;

  @ApiProperty({
    type: () => Date,
    nullable: true,
  })
  harvest_period_end?: Date | null;

  @ApiProperty({
    type: () => Date,
    nullable: true,
  })
  harvest_period_start?: Date | null;

  @ApiProperty({
    type: () => Date,
    nullable: true,
  })
  planting_period_end?: Date | null;

  @ApiProperty({
    type: () => Date,
    nullable: true,
  })
  planting_period_start?: Date | null;

  @ApiProperty({
    type: () => Date,
    nullable: true,
  })
  seeding_period_end?: Date | null;

  @ApiProperty({
    type: () => Date,
    nullable: true,
  })
  seeding_period_start?: Date | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  seeding_depth?: number | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  seeding_distance_plant?: number | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  seeding_distance_row?: number | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  expected_height?: number | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  sun_exposure?: number | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  sprouting_time_max?: number | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  sprouting_time_min?: number | null;

  @ApiProperty({
    type: () => Boolean,
    nullable: false,
  })
  greenhouse: boolean;

  @ApiProperty({
    type: () => String,
    nullable: true,
  })
  variety?: string | null;

  @ApiProperty({
    type: () => String,
    nullable: false,
  })
  name: string;

  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
