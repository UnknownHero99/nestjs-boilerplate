// Don't forget to use the class-validator decorators in the DTO properties.
// import { Allow } from 'class-validator';

import { PartialType } from '@nestjs/swagger';
import { CreateGardenDto } from './create-garden.dto';

export class UpdateGardenDto extends PartialType(CreateGardenDto) {}
