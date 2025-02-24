import { GardensService } from '../gardens/gardens.service';
import { HttpStatus, UnprocessableEntityException } from '@nestjs/common';

import { Injectable } from '@nestjs/common';
import { CreateGardenBedDto } from './dto/create-garden-bed.dto';
import { UpdateGardenBedDto } from './dto/update-garden-bed.dto';
import { GardenBedRepository } from './infrastructure/persistence/garden-bed.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { GardenBed } from './domain/garden-bed';
import { Garden } from '../gardens/domain/garden';

@Injectable()
export class GardenBedsService {
  constructor(
    private readonly gardenService: GardensService,

    // Dependencies here
    private readonly gardenBedRepository: GardenBedRepository,
  ) {}

  async create(createGardenBedDto: CreateGardenBedDto) {
    // Do not remove comment below.
    // <creating-property />
    let garden: Garden | null | undefined = undefined;

    if (createGardenBedDto.garden) {
      const gardenObject = await this.gardenService.findById(
        createGardenBedDto.garden.id,
      );
      if (!gardenObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            garden: 'notExists',
          },
        });
      }
      garden = gardenObject;
    } else if (createGardenBedDto.garden === null) {
      garden = null;
    }

    return this.gardenBedRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      garden,

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
    let garden: Garden | null | undefined = undefined;

    if (updateGardenBedDto.garden) {
      const gardenObject = await this.gardenService.findById(
        updateGardenBedDto.garden.id,
      );
      if (!gardenObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            garden: 'notExists',
          },
        });
      }
      garden = gardenObject;
    } else if (updateGardenBedDto.garden === null) {
      garden = null;
    }

    return this.gardenBedRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
      garden,

      width: updateGardenBedDto.width,

      length: updateGardenBedDto.length,

      name: updateGardenBedDto.name,
    });
  }

  remove(id: GardenBed['id']) {
    return this.gardenBedRepository.remove(id);
  }
}
