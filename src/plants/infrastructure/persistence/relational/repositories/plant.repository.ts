import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { PlantEntity } from '../entities/plant.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Plant } from '../../../../domain/plant';
import { PlantRepository } from '../../plant.repository';
import { PlantMapper } from '../mappers/plant.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class PlantRelationalRepository implements PlantRepository {
  constructor(
    @InjectRepository(PlantEntity)
    private readonly plantRepository: Repository<PlantEntity>,
  ) {}

  async create(data: Plant): Promise<Plant> {
    const persistenceModel = PlantMapper.toPersistence(data);
    const newEntity = await this.plantRepository.save(
      this.plantRepository.create(persistenceModel),
    );
    return PlantMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Plant[]> {
    const entities = await this.plantRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => PlantMapper.toDomain(entity));
  }

  async findById(id: Plant['id']): Promise<NullableType<Plant>> {
    const entity = await this.plantRepository.findOne({
      where: { id },
    });

    return entity ? PlantMapper.toDomain(entity) : null;
  }

  async findByIds(ids: Plant['id'][]): Promise<Plant[]> {
    const entities = await this.plantRepository.find({
      where: { id: In(ids) },
    });

    return entities.map((entity) => PlantMapper.toDomain(entity));
  }

  async update(id: Plant['id'], payload: Partial<Plant>): Promise<Plant> {
    const entity = await this.plantRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.plantRepository.save(
      this.plantRepository.create(
        PlantMapper.toPersistence({
          ...PlantMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return PlantMapper.toDomain(updatedEntity);
  }

  async remove(id: Plant['id']): Promise<void> {
    await this.plantRepository.delete(id);
  }
}
