import { Test } from '@nestjs/testing';
import { ExerciseService } from '../exercise.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Routine } from '../../routine/entities/routine.entity';
import { Exercise } from '../entities/exercise.entity';
import { RoutineService } from '../../routine/routine.service';
import { repositoryMockFactory } from '../../../../test/factories/repositoryMockFactory';
import { Repository } from 'typeorm';
import { MockType } from '../../../../test/utils/MockType';
import { mockExercises } from '../../../../test/fixtures/exercises';

describe('exercise.service', () => {
  let mockExerciseRepository: MockType<Repository<Exercise>>;
  let exerciseService: ExerciseService;
  const exercise = mockExercises[0];

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ExerciseService,
        {
          provide: getRepositoryToken(Exercise),
          useFactory: repositoryMockFactory,
        },
        RoutineService,
        {
          provide: getRepositoryToken(Routine),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();
    exerciseService = await module.get<ExerciseService>(ExerciseService);
    mockExerciseRepository = await module.get(getRepositoryToken(Exercise));
  });
  it('should update related entities correctly', async () => {
    await exerciseService.update(exercise.id, {
      name: exercise.name,
      routines: exercise.routines,
    });

    expect(mockExerciseRepository.save).toHaveBeenCalledWith({
      id: exercise.id,
      name: exercise.name,
      routines: exercise.routines,
    });
    expect(mockExerciseRepository.save).toHaveBeenCalledTimes(1);
  });

  it('should update correctly when not updating related entities', async () => {
    await exerciseService.update(exercise.id, {
      name: exercise.name,
    });

    expect(mockExerciseRepository.update).toHaveBeenCalledWith(exercise.id, {
      name: exercise.name,
    });
    expect(mockExerciseRepository.update).toHaveBeenCalledTimes(1);
  });
});
