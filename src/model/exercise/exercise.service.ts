import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Exercise } from './entities/exercise.entity';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { Routine } from '../routine/entities/routine.entity';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
    @InjectRepository(Routine)
    private routineRepository: Repository<Routine>,
  ) {}

  async create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    return await this.exerciseRepository.save(createExerciseDto);
  }

  async update(
    id: number,
    updateExerciseDto: UpdateExerciseDto,
  ): Promise<Exercise> {
    const routines = await this.routineRepository.findByIds(
      updateExerciseDto.routines,
    );
    const exercise = await this.exerciseRepository.findOne(id);

    exercise.routines = routines;

    return await this.exerciseRepository.save(exercise);
  }

  findAll(): Promise<Exercise[]> {
    return this.exerciseRepository.find({ relations: ['routines'] });
  }

  findOne(id: string): Promise<Exercise> {
    return this.exerciseRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.exerciseRepository.delete(id);
  }
}
