import { DeepPartial } from '../../../utils/types/deep-partial.type';
import { NullableType } from '../../../utils/types/nullable.type';
import { IPaginationOptions } from '../../../utils/types/pagination-options';
import { GardenBed } from '../../domain/garden-bed';

export abstract class GardenBedRepository {
  abstract create(
    data: Omit<GardenBed, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<GardenBed>;

  abstract findAllWithPagination({
    paginationOptions,
  }: {
    paginationOptions: IPaginationOptions;
  }): Promise<GardenBed[]>;

  abstract findById(id: GardenBed['id']): Promise<NullableType<GardenBed>>;

  abstract findByIds(ids: GardenBed['id'][]): Promise<GardenBed[]>;

  abstract update(
    id: GardenBed['id'],
    payload: DeepPartial<GardenBed>,
  ): Promise<GardenBed | null>;

  abstract remove(id: GardenBed['id']): Promise<void>;
}
