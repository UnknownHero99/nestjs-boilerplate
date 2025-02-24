import { Seed } from '../../../../domain/seed';

import { SeedEntity } from '../entities/seed.entity';

export class SeedMapper {
  static toDomain(raw: SeedEntity): Seed {
    const domainEntity = new Seed();
    domainEntity.notes = raw.notes;

    domainEntity.harvest_period_end = raw.harvest_period_end;

    domainEntity.harvest_period_start = raw.harvest_period_start;

    domainEntity.planting_period_end = raw.planting_period_end;

    domainEntity.planting_period_start = raw.planting_period_start;

    domainEntity.seeding_period_end = raw.seeding_period_end;

    domainEntity.seeding_period_start = raw.seeding_period_start;

    domainEntity.seeding_depth = raw.seeding_depth;

    domainEntity.seeding_distance_plant = raw.seeding_distance_plant;

    domainEntity.seeding_distance_row = raw.seeding_distance_row;

    domainEntity.expected_height = raw.expected_height;

    domainEntity.sun_exposure = raw.sun_exposure;

    domainEntity.sprouting_time_max = raw.sprouting_time_max;

    domainEntity.sprouting_time_min = raw.sprouting_time_min;

    domainEntity.greenhouse = raw.greenhouse;

    domainEntity.variety = raw.variety;

    domainEntity.name = raw.name;

    domainEntity.id = raw.id;
    domainEntity.createdAt = raw.createdAt;
    domainEntity.updatedAt = raw.updatedAt;

    return domainEntity;
  }

  static toPersistence(domainEntity: Seed): SeedEntity {
    const persistenceEntity = new SeedEntity();
    persistenceEntity.notes = domainEntity.notes;

    persistenceEntity.harvest_period_end = domainEntity.harvest_period_end;

    persistenceEntity.harvest_period_start = domainEntity.harvest_period_start;

    persistenceEntity.planting_period_end = domainEntity.planting_period_end;

    persistenceEntity.planting_period_start =
      domainEntity.planting_period_start;

    persistenceEntity.seeding_period_end = domainEntity.seeding_period_end;

    persistenceEntity.seeding_period_start = domainEntity.seeding_period_start;

    persistenceEntity.seeding_depth = domainEntity.seeding_depth;

    persistenceEntity.seeding_distance_plant =
      domainEntity.seeding_distance_plant;

    persistenceEntity.seeding_distance_row = domainEntity.seeding_distance_row;

    persistenceEntity.expected_height = domainEntity.expected_height;

    persistenceEntity.sun_exposure = domainEntity.sun_exposure;

    persistenceEntity.sprouting_time_max = domainEntity.sprouting_time_max;

    persistenceEntity.sprouting_time_min = domainEntity.sprouting_time_min;

    persistenceEntity.greenhouse = domainEntity.greenhouse;

    persistenceEntity.variety = domainEntity.variety;

    persistenceEntity.name = domainEntity.name;

    if (domainEntity.id) {
      persistenceEntity.id = domainEntity.id;
    }
    persistenceEntity.createdAt = domainEntity.createdAt;
    persistenceEntity.updatedAt = domainEntity.updatedAt;

    return persistenceEntity;
  }
}
