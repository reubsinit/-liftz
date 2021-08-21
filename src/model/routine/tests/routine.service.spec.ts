import { Test } from '@nestjs/testing';
import { ExerciseService } from '../../exercise/exercise.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Routine } from '../entities/routine.entity';
import { Exercise } from '../../exercise/entities/exercise.entity';
import { RoutineService } from '../routine.service';
import { repositoryMockFactory } from '../../../../test/factories/repositoryMockFactory';
import { Repository } from 'typeorm';
import { MockType } from '../../../../test/utils/MockType';
import { mockRoutines } from '../../../../test/fixtures/routines';

describe('routine.service', () => {
  let mockRoutineRepository: MockType<Repository<Routine>>;
  let routineService: RoutineService;
  const routine = mockRoutines[0];

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        RoutineService,
        {
          provide: getRepositoryToken(Routine),
          useFactory: repositoryMockFactory,
        },
        ExerciseService,
        {
          provide: getRepositoryToken(Exercise),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();
    routineService = await module.get<RoutineService>(RoutineService);
    mockRoutineRepository = await module.get(getRepositoryToken(Routine));
  });
  it('should update related entities correctly', async () => {
    await routineService.update(routine.id, {
      name: routine.name,
      isActive: routine.isActive,
      exercises: routine.exercises,
    });

    expect(mockRoutineRepository.save).toHaveBeenCalledWith({
      id: routine.id,
      name: routine.name,
      isActive: routine.isActive,
      exercises: routine.exercises,
    });
    expect(mockRoutineRepository.save).toHaveBeenCalledTimes(1);
  });

  it('should update correctly when not updating related entities', async () => {
    await mockRoutineRepository.update(routine.id, {
      name: routine.name,
      isActive: routine.isActive,
    });

    expect(mockRoutineRepository.update).toHaveBeenCalledWith(routine.id, {
      name: routine.name,
      isActive: routine.isActive,
    });
    expect(mockRoutineRepository.update).toHaveBeenCalledTimes(1);
  });
});
