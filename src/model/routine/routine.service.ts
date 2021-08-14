import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Routine } from './entities/routine.entity';
import { CreateRoutineDto } from './dto/create-routine.dto';

@Injectable()
export class RoutineService {
  constructor(
    @InjectRepository(Routine)
    private routineRepository: Repository<Routine>,
  ) {}

  async create(createRoutineDto: CreateRoutineDto): Promise<Routine> {
    return await this.routineRepository.save(createRoutineDto);
  }

  findAll(): Promise<Routine[]> {
    return this.routineRepository.find({ relations: ['exercises'] });
  }

  findOne(id: string): Promise<Routine> {
    return this.routineRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.routineRepository.delete(id);
  }
}
