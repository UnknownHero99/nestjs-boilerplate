import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

@Entity({
  name: 'seed',
})
export class SeedEntity extends EntityRelationalHelper {
  @Column({
    nullable: true,
    type: String,
  })
  notes?: string | null;

  @Column({
    nullable: true,
    type: Date,
  })
  harvest_period_end?: Date | null;

  @Column({
    nullable: true,
    type: Date,
  })
  harvest_period_start?: Date | null;

  @Column({
    nullable: true,
    type: Date,
  })
  planting_period_end?: Date | null;

  @Column({
    nullable: true,
    type: Date,
  })
  planting_period_start?: Date | null;

  @Column({
    nullable: true,
    type: Date,
  })
  seeding_period_end?: Date | null;

  @Column({
    nullable: true,
    type: Date,
  })
  seeding_period_start?: Date | null;

  @Column({
    nullable: true,
    type: Number,
  })
  seeding_depth?: number | null;

  @Column({
    nullable: true,
    type: Number,
  })
  seeding_distance_plant?: number | null;

  @Column({
    nullable: true,
    type: Number,
  })
  seeding_distance_row?: number | null;

  @Column({
    nullable: true,
    type: Number,
  })
  expected_height?: number | null;

  @Column({
    nullable: true,
    type: Number,
  })
  sun_exposure?: number | null;

  @Column({
    nullable: true,
    type: Number,
  })
  sprouting_time_max?: number | null;

  @Column({
    nullable: true,
    type: Number,
  })
  sprouting_time_min?: number | null;

  @Column({
    nullable: false,
    type: Boolean,
  })
  greenhouse: boolean;

  @Column({
    nullable: true,
    type: String,
  })
  variety?: string | null;

  @Column({
    nullable: false,
    type: String,
  })
  name: string;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
