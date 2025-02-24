import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';

@Entity({
  name: 'garden_bed',
})
export class GardenBedEntity extends EntityRelationalHelper {
  @Column({
    nullable: true,
    type: Number,
  })
  width?: number | null;

  @Column({
    nullable: true,
    type: Number,
  })
  length?: number | null;

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
