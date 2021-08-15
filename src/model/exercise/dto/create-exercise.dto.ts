import { DeepPartial } from 'typeorm';
import { Routine } from 'src/model/routine/entities/routine.entity';

export class CreateExerciseDto {
  name: string;
  routines: DeepPartial<Routine>[];
}
