import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Routine } from './entities/routine.entity';
import { CreateRoutineDto } from './dto/create-routine.dto';
import { UpdateRoutineDto } from './dto/update-routine.dto';
import { Exercise } from '../exercise/entities/exercise.entity';

@Injectable()
export class RoutineService {
  constructor(
    @InjectRepository(Routine)
    private routineRepository: Repository<Routine>,
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
  ) {}

  async create(createRoutineDto: CreateRoutineDto): Promise<Routine> {
    return await this.routineRepository.save(createRoutineDto);
  }

  async onUpdateOfExercises(
    id: number,
    updateRoutineDto: UpdateRoutineDto,
  ): Promise<Routine> {
    const routine = await this.routineRepository.findOne(id);

    const exercises = await this.exerciseRepository.findByIds(
      updateRoutineDto.exercises,
    );

    return await this.routineRepository.save({
      ...routine,
      ...updateRoutineDto,
      exercises,
    });
  }

  async update(
    id: number,
    updateRoutineDto: UpdateRoutineDto,
  ): Promise<Routine | UpdateResult> {
    if (updateRoutineDto.exercises) {
      try {
        return await this.onUpdateOfExercises(id, updateRoutineDto);
      } catch (error) {
        console.error(error);
      }
    } else {
      return await this.routineRepository.update(id, updateRoutineDto);
    }
  }

  findAll(): Promise<Routine[]> {
    return this.routineRepository.find({ relations: ['exercises'] });
  }

  findOne(id: string): Promise<Routine> {
    return this.routineRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.routineRepository.delete(id);
  }
}
