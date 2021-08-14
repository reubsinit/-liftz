import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoutineService } from './routine.service';
import { Routine } from './entities/routine.entity';
import { RoutineController } from './routine.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Routine]), RoutineModule],
  providers: [RoutineService],
  controllers: [RoutineController],
})
export class RoutineModule {}
