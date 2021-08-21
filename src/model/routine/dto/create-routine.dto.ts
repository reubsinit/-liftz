import { Exercise } from 'src/model/exercise/entities/exercise.entity';
import { DeepPartial } from 'typeorm';

export class CreateRoutineDto {
  name: string;
  isActive: boolean;
  exercises: DeepPartial<Exercise>[];
}
