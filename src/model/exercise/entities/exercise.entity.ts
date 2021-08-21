import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Routine } from '../../routine/entities/routine.entity';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Routine, (routine: Routine) => routine.exercises)
  routines: Routine[];
}
