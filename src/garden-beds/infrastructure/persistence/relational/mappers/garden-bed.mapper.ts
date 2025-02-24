import { GardenBed } from '../../../../domain/garden-bed';

import { GardenBedEntity } from '../entities/garden-bed.entity';

export class GardenBedMapper {
  static toDomain(raw: GardenBedEntity): GardenBed {
    const domainEntity = new GardenBed();
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
