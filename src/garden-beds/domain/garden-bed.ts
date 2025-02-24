import { ApiProperty } from '@nestjs/swagger';

export class GardenBed {
  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  width?: number | null;

  @ApiProperty({
    type: () => Number,
    nullable: true,
  })
  length?: number | null;

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
