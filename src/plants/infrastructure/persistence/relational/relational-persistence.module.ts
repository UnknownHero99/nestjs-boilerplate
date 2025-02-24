import { Module } from '@nestjs/common';
import { PlantRepository } from '../plant.repository';
import { PlantRelationalRepository } from './repositories/plant.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantEntity } from './entities/plant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlantEntity])],
  providers: [
    {
      provide: PlantRepository,
      useClass: PlantRelationalRepository,
    },
  ],
  exports: [PlantRepository],
})
export class RelationalPlantPersistenceModule {}
