import { GardenBed } from '../../../../domain/garden-bed';
import { GardenMapper } from '../../../../../gardens/infrastructure/persistence/relational/mappers/garden.mapper';

import { GardenBedEntity } from '../entities/garden-bed.entity';

export class GardenBedMapper {
  static toDomain(raw: GardenBedEntity): GardenBed {
    const domainEntity = new GardenBed();
    if (raw.garden) {
      domainEntity.garden = GardenMapper.toDomain(raw.garden);
    } else if (raw.garden === null) {
      domainEntity.garden = null;
    }

    domainEntity.width = raw.width;

    domainEntity.length = raw.length;

    domainEntity.name = raw.name;

    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: GardenBed): GardenBedEntity {
    const persistenceEntity = new GardenBedEntity();
    if (domainEntity.garden) {
      persistenceEntity.garden = GardenMapper.toPersistence(
        domainEntity.garden,
      );
    } else if (domainEntity.garden === null) {
      persistenceEntity.garden = null;
    }

    persistenceEntity.width = domainEntity.width;

    persistenceEntity.length = domainEntity.length;

    persistenceEntity.name = domainEntity.name;

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
