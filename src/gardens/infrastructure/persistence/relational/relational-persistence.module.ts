import { Module } from '@nestjs/common';
import { GardenRepository } from '../garden.repository';
import { GardenRelationalRepository } from './repositories/garden.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GardenEntity } from './entities/garden.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GardenEntity])],
  providers: [
    {
      provide: GardenRepository,
      useClass: GardenRelationalRepository,
    },
  ],
  exports: [GardenRepository],
})
export class RelationalGardenPersistenceModule {}
