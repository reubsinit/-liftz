import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Exercise } from '../../exercise/entities/exercise.entity';

@Entity()
export class Routine {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => Exercise, (exercise: Exercise) => exercise.routines)
  @JoinTable()
  exercises: Exercise[];
}
