import { Module } from '@nestjs/common';
import { SeedsService } from './seeds.service';
import { SeedsController } from './seeds.controller';
import { RelationalSeedPersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [
    // import modules, etc.
    RelationalSeedPersistenceModule,
  ],
  controllers: [SeedsController],
  providers: [SeedsService],
  exports: [SeedsService, RelationalSeedPersistenceModule],
})
export class SeedsModule {}
