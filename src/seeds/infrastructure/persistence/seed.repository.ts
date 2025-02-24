import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Seed } from '../../domain/seed';

export abstract class SeedRepository {
  abstract create(
    data: Omit<Seed, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Seed>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Seed[]>;

  abstract findById(id: Seed['id']): Promise<NullableType<Seed>>;

  abstract findByIds(ids: Seed['id'][]): Promise<Seed[]>;

  abstract update(
    id: Seed['id'],
    payload: DeepPartial<Seed>,
  ): Promise<Seed | null>;

  abstract remove(id: Seed['id']): Promise<void>;
}
