import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Routine } from 'src/model/routine/entities/routine.entity';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Routine, (routine: Routine) => routine.exercises)
  routines: Routine[];
}
