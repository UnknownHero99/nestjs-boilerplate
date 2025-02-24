import { Garden } from '../../../../domain/garden';

import { GardenEntity } from '../entities/garden.entity';

export class GardenMapper {
  static toDomain(raw: GardenEntity): Garden {
    const domainEntity = new Garden();
    domainEntity.location = raw.location;

    domainEntity.name = raw.name;

    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Garden): GardenEntity {
    const persistenceEntity = new GardenEntity();
    persistenceEntity.location = domainEntity.location;

    persistenceEntity.name = domainEntity.name;

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
