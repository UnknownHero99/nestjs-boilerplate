import { Module } from '@nestjs/common';
import { SeedRepository } from '../seed.repository';
import { SeedRelationalRepository } from './repositories/seed.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedEntity } from './entities/seed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SeedEntity])],
  providers: [
    {
      provide: SeedRepository,
      useClass: SeedRelationalRepository,
    },
  ],
  exports: [SeedRepository],
})
export class RelationalSeedPersistenceModule {}
