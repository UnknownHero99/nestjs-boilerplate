import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Garden } from '../../domain/garden';

export abstract class GardenRepository {
  abstract create(
    data: Omit<Garden, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Garden>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Garden[]>;

  abstract findById(id: Garden['id']): Promise<NullableType<Garden>>;

  abstract findByIds(ids: Garden['id'][]): Promise<Garden[]>;

  abstract update(
    id: Garden['id'],
    payload: DeepPartial<Garden>,
  ): Promise<Garden | null>;

  abstract remove(id: Garden['id']): Promise<void>;
}
