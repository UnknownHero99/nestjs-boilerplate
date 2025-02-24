import { Injectable } from '@nestjs/common';
import { CreateGardenBedDto } from './dto/create-garden-bed.dto';
import { UpdateGardenBedDto } from './dto/update-garden-bed.dto';
import { GardenBedRepository } from './infrastructure/persistence/garden-bed.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { GardenBed } from './domain/garden-bed';

@Injectable()
export class GardenBedsService {
  constructor(
    // Dependencies here
    private readonly gardenBedRepository: GardenBedRepository,
  ) {}

  async create(createGardenBedDto: CreateGardenBedDto) {
    // Do not remove comment below.
    // <creating-property />

    return this.gardenBedRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      width: createGardenBedDto.width,

      length: createGardenBedDto.length,

      name: createGardenBedDto.name,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.gardenBedRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: GardenBed['id']) {
    return this.gardenBedRepository.findById(id);
  }

  findByIds(ids: GardenBed['id'][]) {
    return this.gardenBedRepository.findByIds(ids);
  }

  async update(
    id: GardenBed['id'],

    updateGardenBedDto: UpdateGardenBedDto,
  ) {
    // Do not remove comment below.
    // <updating-property />

    return this.gardenBedRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
      width: updateGardenBedDto.width,

      length: updateGardenBedDto.length,

      name: updateGardenBedDto.name,
    });
  }

  remove(id: GardenBed['id']) {
    return this.gardenBedRepository.remove(id);
  }
}
