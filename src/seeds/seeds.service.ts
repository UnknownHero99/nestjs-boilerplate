import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { SeedRepository } from './infrastructure/persistence/seed.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Seed } from './domain/seed';

@Injectable()
export class SeedsService {
  constructor(
    // Dependencies here
    private readonly seedRepository: SeedRepository,
  ) {}

  async create(createSeedDto: CreateSeedDto) {
    // Do not remove comment below.
    // <creating-property />

    return this.seedRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      notes: createSeedDto.notes,

      harvest_period_end: createSeedDto.harvest_period_end,

      harvest_period_start: createSeedDto.harvest_period_start,

      planting_period_end: createSeedDto.planting_period_end,

      planting_period_start: createSeedDto.planting_period_start,

      seeding_period_end: createSeedDto.seeding_period_end,

      seeding_period_start: createSeedDto.seeding_period_start,

      seeding_depth: createSeedDto.seeding_depth,

      seeding_distance_plant: createSeedDto.seeding_distance_plant,

      seeding_distance_row: createSeedDto.seeding_distance_row,

      expected_height: createSeedDto.expected_height,

      sun_exposure: createSeedDto.sun_exposure,

      sprouting_time_max: createSeedDto.sprouting_time_max,

      sprouting_time_min: createSeedDto.sprouting_time_min,

      greenhouse: createSeedDto.greenhouse,

      variety: createSeedDto.variety,

      name: createSeedDto.name,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.seedRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Seed['id']) {
    return this.seedRepository.findById(id);
  }

  findByIds(ids: Seed['id'][]) {
    return this.seedRepository.findByIds(ids);
  }

  async update(
    id: Seed['id'],

    updateSeedDto: UpdateSeedDto,
  ) {
    // Do not remove comment below.
    // <updating-property />

    return this.seedRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
      notes: updateSeedDto.notes,

      harvest_period_end: updateSeedDto.harvest_period_end,

      harvest_period_start: updateSeedDto.harvest_period_start,

      planting_period_end: updateSeedDto.planting_period_end,

      planting_period_start: updateSeedDto.planting_period_start,

      seeding_period_end: updateSeedDto.seeding_period_end,

      seeding_period_start: updateSeedDto.seeding_period_start,

      seeding_depth: updateSeedDto.seeding_depth,

      seeding_distance_plant: updateSeedDto.seeding_distance_plant,

      seeding_distance_row: updateSeedDto.seeding_distance_row,

      expected_height: updateSeedDto.expected_height,

      sun_exposure: updateSeedDto.sun_exposure,

      sprouting_time_max: updateSeedDto.sprouting_time_max,

      sprouting_time_min: updateSeedDto.sprouting_time_min,

      greenhouse: updateSeedDto.greenhouse,

      variety: updateSeedDto.variety,

      name: updateSeedDto.name,
    });
  }

  remove(id: Seed['id']) {
    return this.seedRepository.remove(id);
  }
}
