import { GardensModule } from '../gardens/gardens.module';
import { Module } from '@nestjs/common';
import { GardenBedsService } from './garden-beds.service';
import { GardenBedsController } from './garden-beds.controller';
import { RelationalGardenBedPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [
    GardensModule,

    // import modules, etc.
    RelationalGardenBedPersistenceModule,
  ],
  controllers: [GardenBedsController],
  providers: [GardenBedsService],
  exports: [GardenBedsService, RelationalGardenBedPersistenceModule],
})
export class GardenBedsModule {}
