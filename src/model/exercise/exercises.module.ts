import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExercisesService } from './exercises.service';
import { Exercise } from './entities/exercise.entity';
import { ExerciseController } from './exercise.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Exercise])],
  providers: [ExercisesService],
  controllers: [ExerciseController],
})
export class ExercisesModule {}
