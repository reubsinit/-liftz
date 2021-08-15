import { Exercise } from 'src/model/exercise/entities/exercise.entity';
import { DeepPartial } from 'typeorm';

export class CreateRoutineDto {
  exercises: DeepPartial<Exercise>[];
}
