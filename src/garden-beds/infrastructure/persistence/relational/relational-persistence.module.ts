import { Module } from '@nestjs/common';
import { GardenBedRepository } from '../garden-bed.repository';
import { GardenBedRelationalRepository } from './repositories/garden-bed.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GardenBedEntity } from './entities/garden-bed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GardenBedEntity])],
  providers: [
    {
      provide: GardenBedRepository,
      useClass: GardenBedRelationalRepository,
    },
  ],
  exports: [GardenBedRepository],
})
export class RelationalGardenBedPersistenceModule {}
