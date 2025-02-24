// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateGardenBedDto } from './create-garden-bed.dto';

export class UpdateGardenBedDto extends PartialType(CreateGardenBedDto) {}
