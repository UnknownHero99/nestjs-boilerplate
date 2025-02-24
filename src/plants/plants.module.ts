import { GardenBedsModule } from '../garden-beds/garden-beds.module';
import { SeedsModule } from '../seeds/seeds.module';
import { Module } from '@nestjs/common';
import { PlantsService } from './plants.service';
import { PlantsController } from './plants.controller';
import { RelationalPlantPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [
    GardenBedsModule,

    SeedsModule,

    // import modules, etc.
    RelationalPlantPersistenceModule,
  ],
  controllers: [PlantsController],
  providers: [PlantsService],
  exports: [PlantsService, RelationalPlantPersistenceModule],
})
export class PlantsModule {}
