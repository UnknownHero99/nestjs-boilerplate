import { Plant } from '../../../../domain/plant';

import { GardenBedMapper } from '../../../../../garden-beds/infrastructure/persistence/relational/mappers/garden-bed.mapper';

import { SeedMapper } from '../../../../../seeds/infrastructure/persistence/relational/mappers/seed.mapper';

import { PlantEntity } from '../entities/plant.entity';

export class PlantMapper {
  static toDomain(raw: PlantEntity): Plant {
    const domainEntity = new Plant();
    domainEntity.notes = raw.notes;

    if (raw.location) {
      domainEntity.location = GardenBedMapper.toDomain(raw.location);
    }

    domainEntity.quantity = raw.quantity;

    domainEntity.planting_date = raw.planting_date;

    if (raw.seed) {
      domainEntity.seed = SeedMapper.toDomain(raw.seed);
    }

    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Plant): PlantEntity {
    const persistenceEntity = new PlantEntity();
    persistenceEntity.notes = domainEntity.notes;

    if (domainEntity.location) {
      persistenceEntity.location = GardenBedMapper.toPersistence(
        domainEntity.location,
      );
    }

    persistenceEntity.quantity = domainEntity.quantity;

    persistenceEntity.planting_date = domainEntity.planting_date;

    if (domainEntity.seed) {
      persistenceEntity.seed = SeedMapper.toPersistence(domainEntity.seed);
    }

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
