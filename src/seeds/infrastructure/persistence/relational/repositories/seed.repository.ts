import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { SeedEntity } from '../entities/seed.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Seed } from '../../../../domain/seed';
import { SeedRepository } from '../../seed.repository';
import { SeedMapper } from '../mappers/seed.mapper';
import { IPaginationOptions } from '../../../../../utils/types/pagination-options';

@Injectable()
export class SeedRelationalRepository implements SeedRepository {
  constructor(
    @InjectRepository(SeedEntity)
    private readonly seedRepository: Repository<SeedEntity>,
  ) {}

  async create(data: Seed): Promise<Seed> {
    const persistenceModel = SeedMapper.toPersistence(data);
    const newEntity = await this.seedRepository.save(
      this.seedRepository.create(persistenceModel),
    );
    return SeedMapper.toDomain(newEntity);
  }

  async findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Seed[]> {
    const entities = await this.seedRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });

    return entities.map((entity) => SeedMapper.toDomain(entity));
  }

  async findById(id: Seed['id']): Promise<NullableType<Seed>> {
    const entity = await this.seedRepository.findOne({
      where: { id },
    });

    return entity ? SeedMapper.toDomain(entity) : null;
  }

  async findByIds(ids: Seed['id'][]): Promise<Seed[]> {
    const entities = await this.seedRepository.find({
      where: { id: In(ids) },
    });

    return entities.map((entity) => SeedMapper.toDomain(entity));
  }

  async update(id: Seed['id'], payload: Partial<Seed>): Promise<Seed> {
    const entity = await this.seedRepository.findOne({
      where: { id },
    });

    if (!entity) {
      throw new Error('Record not found');
    }

    const updatedEntity = await this.seedRepository.save(
      this.seedRepository.create(
        SeedMapper.toPersistence({
          ...SeedMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return SeedMapper.toDomain(updatedEntity);
  }

  async remove(id: Seed['id']): Promise<void> {
    await this.seedRepository.delete(id);
  }
}
