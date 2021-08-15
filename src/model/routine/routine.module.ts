import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoutineService } from './routine.service';
import { Routine } from './entities/routine.entity';
import { RoutineController } from './routine.controller';
import { Exercise } from '../exercise/entities/exercise.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Routine]),
    TypeOrmModule.forFeature([Exercise]),
  ],
  providers: [RoutineService],
  controllers: [RoutineController],
})
export class RoutineModule {}
