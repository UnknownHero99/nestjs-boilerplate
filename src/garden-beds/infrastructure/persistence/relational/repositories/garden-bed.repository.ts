import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { GardenBedEntity } from '../entities/garden-bed.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { GardenBed } from '../../../../domain/garden-bed';
import { GardenBedRepository } from '../../garden-bed.repository';
import { GardenBedMapper } from '../mappers/garden-bed.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class GardenBedRelationalRepository implements GardenBedRepository {
  constructor(
    @InjectRepository(GardenBedEntity)
    private readonly gardenBedRepository: Repository<GardenBedEntity>,
  ) {}

  async create(data: GardenBed): Promise<GardenBed> {
    const persistenceModel = GardenBedMapper.toPersistence(data);
    const newEntity = await this.gardenBedRepository.save(
      this.gardenBedRepository.create(persistenceModel),
    );
    return GardenBedMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<GardenBed[]> {
    const entities = await this.gardenBedRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => GardenBedMapper.toDomain(entity));
  }

  async findById(id: GardenBed['id']): Promise<NullableType<GardenBed>> {
    const entity = await this.gardenBedRepository.findOne({
      where: { id },
    });

    return entity ? GardenBedMapper.toDomain(entity) : null;
  }

  async findByIds(ids: GardenBed['id'][]): Promise<GardenBed[]> {
    const entities = await this.gardenBedRepository.find({
      where: { id: In(ids) },
    });

    return entities.map((entity) => GardenBedMapper.toDomain(entity));
  }

  async update(
    id: GardenBed['id'],
    payload: Partial<GardenBed>,
  ): Promise<GardenBed> {
    const entity = await this.gardenBedRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.gardenBedRepository.save(
      this.gardenBedRepository.create(
        GardenBedMapper.toPersistence({
          ...GardenBedMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return GardenBedMapper.toDomain(updatedEntity);
  }

  async remove(id: GardenBed['id']): Promise<void> {
    await this.gardenBedRepository.delete(id);
  }
}
