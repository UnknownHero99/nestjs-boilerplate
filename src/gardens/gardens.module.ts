import { Module } from '@nestjs/common';
import { GardensService } from './gardens.service';
import { GardensController } from './gardens.controller';
import { RelationalGardenPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [
    // import modules, etc.
    RelationalGardenPersistenceModule,
  ],
  controllers: [GardensController],
  providers: [GardensService],
  exports: [GardensService, RelationalGardenPersistenceModule],
})
export class GardensModule {}
