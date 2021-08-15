import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Routine } from './entities/routine.entity';
import { CreateRoutineDto } from './dto/create-routine.dto';
import { UpdateRoutineDto } from './dto/update-routine.dto';

@Injectable()
export class RoutineService {
  constructor(
    @InjectRepository(Routine)
    private routineRepository: Repository<Routine>,
  ) {}

  async create(createRoutineDto: CreateRoutineDto): Promise<Routine> {
    return await this.routineRepository.save(createRoutineDto);
  }

  async update(
    id: number,
    updateTestDto: UpdateRoutineDto,
  ): Promise<UpdateResult> {
    return await this.routineRepository.update(id, updateTestDto);
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
