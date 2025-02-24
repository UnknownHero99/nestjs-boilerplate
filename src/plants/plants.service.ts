import { GardenBedsService } from '../garden-beds/garden-beds.service';
import { GardenBed } from '../garden-beds/domain/garden-bed';

import { SeedsService } from '../seeds/seeds.service';
import { Seed } from '../seeds/domain/seed';

import { HttpStatus, UnprocessableEntityException } from '@nestjs/common';

import { Injectable } from '@nestjs/common';
import { CreatePlantDto } from './dto/create-plant.dto';
import { UpdatePlantDto } from './dto/update-plant.dto';
import { PlantRepository } from './infrastructure/persistence/plant.repository';
import { IPaginationOptions } from '../utils/types/pagination-options';
import { Plant } from './domain/plant';

@Injectable()
export class PlantsService {
  constructor(
    private readonly gardenBedService: GardenBedsService,

    private readonly seedService: SeedsService,

    // Dependencies here
    private readonly plantRepository: PlantRepository,
  ) {}

  async create(createPlantDto: CreatePlantDto) {
    // Do not remove comment below.
    // <creating-property />

    const locationObject = await this.gardenBedService.findById(
      createPlantDto.location.id,
    );
    if (!locationObject) {
      throw new UnprocessableEntityException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: {
          location: 'notExists',
        },
      });
    }
    const location = locationObject;

    const seedObject = await this.seedService.findById(createPlantDto.seed.id);
    if (!seedObject) {
      throw new UnprocessableEntityException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        errors: {
          seed: 'notExists',
        },
      });
    }
    const seed = seedObject;

    return this.plantRepository.create({
      // Do not remove comment below.
      // <creating-property-payload />
      notes: createPlantDto.notes,

      location,

      quantity: createPlantDto.quantity,

      planting_date: createPlantDto.planting_date,

      seed,
    });
  }

  findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }) {
    return this.plantRepository.findAllWithPagination({
      paginationOptions: {
        page: paginationOptions.page,
        limit: paginationOptions.limit,
      },
    });
  }

  findById(id: Plant['id']) {
    return this.plantRepository.findById(id);
  }

  findByIds(ids: Plant['id'][]) {
    return this.plantRepository.findByIds(ids);
  }

  async update(
    id: Plant['id'],

    updatePlantDto: UpdatePlantDto,
  ) {
    // Do not remove comment below.
    // <updating-property />

    let location: GardenBed | undefined = undefined;

    if (updatePlantDto.location) {
      const locationObject = await this.gardenBedService.findById(
        updatePlantDto.location.id,
      );
      if (!locationObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            location: 'notExists',
          },
        });
      }
      location = locationObject;
    }

    let seed: Seed | undefined = undefined;

    if (updatePlantDto.seed) {
      const seedObject = await this.seedService.findById(
        updatePlantDto.seed.id,
      );
      if (!seedObject) {
        throw new UnprocessableEntityException({
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            seed: 'notExists',
          },
        });
      }
      seed = seedObject;
    }

    return this.plantRepository.update(id, {
      // Do not remove comment below.
      // <updating-property-payload />
      notes: updatePlantDto.notes,

      location,

      quantity: updatePlantDto.quantity,

      planting_date: updatePlantDto.planting_date,

      seed,
    });
  }

  remove(id: Plant['id']) {
    return this.plantRepository.remove(id);
  }
}
