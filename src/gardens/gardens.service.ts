import { Injectable } from '@nestjs/common';
import { CreateGardenDto } from './dto/create-garden.dto';
import { UpdateGardenDto } from './dto/update-garden.dto';
import { GardenRepository } from './infrastructure/persistence/garden.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Garden } from './domain/garden';

@Injectable()
export class GardensService {
  constructor(
    // Dependencies here
    private readonly gardenRepository: GardenRepository,
  ) {}

  async create(createGardenDto: CreateGardenDto) {
    // Do not remove comment below.
    // <creating-property />

    return this.gardenRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      location: createGardenDto.location,

      name: createGardenDto.name,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.gardenRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Garden['id']) {
    return this.gardenRepository.findById(id);
  }

  findByIds(ids: Garden['id'][]) {
    return this.gardenRepository.findByIds(ids);
  }

  async update(
    id: Garden['id'],

    updateGardenDto: UpdateGardenDto,
  ) {
    // Do not remove comment below.
    // <updating-property />

    return this.gardenRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
      location: updateGardenDto.location,

      name: updateGardenDto.name,
    });
  }

  remove(id: Garden['id']) {
    return this.gardenRepository.remove(id);
  }
}
