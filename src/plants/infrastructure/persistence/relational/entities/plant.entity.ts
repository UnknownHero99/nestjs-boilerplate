import { GardenBedEntity } from '../../../../../garden-beds/infrastructure/persistence/relational/entities/garden-bed.entity';

import { SeedEntity } from '../../../../../seeds/infrastructure/persistence/relational/entities/seed.entity';

import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

@Entity({
  name: 'plant',
})
export class PlantEntity extends EntityRelationalHelper {
  @Column({
    nullable: true,
    type: String,
  })
  notes?: string | null;

  @ManyToOne(() => GardenBedEntity, { eager: true, nullable: false })
  location: GardenBedEntity;

  @Column({
    nullable: false,
    type: Number,
  })
  quantity: number;

  @Column({
    nullable: false,
    type: Date,
  })
  planting_date: Date;

  @ManyToOne(() => SeedEntity, { eager: true, nullable: false })
  seed: SeedEntity;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
