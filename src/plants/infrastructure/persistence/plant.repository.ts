import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { Plant } from '../../domain/plant';

export abstract class PlantRepository {
  abstract create(
    data: Omit<Plant, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Plant>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<Plant[]>;

  abstract findById(id: Plant['id']): Promise<NullableType<Plant>>;

  abstract findByIds(ids: Plant['id'][]): Promise<Plant[]>;

  abstract update(
    id: Plant['id'],
    payload: DeepPartial<Plant>,
  ): Promise<Plant | null>;

  abstract remove(id: Plant['id']): Promise<void>;
}
