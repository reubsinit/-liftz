import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseService } from './exercise.service';
import { Exercise } from './entities/exercise.entity';
import { ExerciseController } from './exercise.controller';
import { Routine } from '../routine/entities/routine.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Exercise]),
    TypeOrmModule.forFeature([Routine]),
  ],
  providers: [ExerciseService],
  controllers: [ExerciseController],
})
export class ExerciseModule {}
