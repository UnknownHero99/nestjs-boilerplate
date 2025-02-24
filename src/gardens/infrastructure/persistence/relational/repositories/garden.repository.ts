import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { GardenEntity } from '../entities/garden.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Garden } from '../../../../domain/garden';
import { GardenRepository } from '../../garden.repository';
import { GardenMapper } from '../mappers/garden.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class GardenRelationalRepository implements GardenRepository {
  constructor(
    @InjectRepository(GardenEntity)
    private readonly gardenRepository: Repository<GardenEntity>,
  ) {}

  async create(data: Garden): Promise<Garden> {
    const persistenceModel = GardenMapper.toPersistence(data);
    const newEntity = await this.gardenRepository.save(
      this.gardenRepository.create(persistenceModel),
    );
    return GardenMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Garden[]> {
    const entities = await this.gardenRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => GardenMapper.toDomain(entity));
  }

  async findById(id: Garden['id']): Promise<NullableType<Garden>> {
    const entity = await this.gardenRepository.findOne({
      where: { id },
    });

    return entity ? GardenMapper.toDomain(entity) : null;
  }

  async findByIds(ids: Garden['id'][]): Promise<Garden[]> {
    const entities = await this.gardenRepository.find({
      where: { id: In(ids) },
    });

    return entities.map((entity) => GardenMapper.toDomain(entity));
  }

  async update(id: Garden['id'], payload: Partial<Garden>): Promise<Garden> {
    const entity = await this.gardenRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.gardenRepository.save(
      this.gardenRepository.create(
        GardenMapper.toPersistence({
          ...GardenMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return GardenMapper.toDomain(updatedEntity);
  }

  async remove(id: Garden['id']): Promise<void> {
    await this.gardenRepository.delete(id);
  }
}
