import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from './entities/exercise.entity';
import { CreateExerciseDto } from './dto/create-exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exercisesRepository: Repository<Exercise>,
  ) {}

  async create(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    return await this.exercisesRepository.save(createExerciseDto);
  }

  findAll(): Promise<Exercise[]> {
    return this.exercisesRepository.find();
  }

  findOne(id: string): Promise<Exercise> {
    return this.exercisesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.exercisesRepository.delete(id);
  }
}
