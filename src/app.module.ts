import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExerciseModule } from './model/exercise/exercise.module';
import { RoutineModule } from './model/routine/routine.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'liftz_user',
      password: '&fdsknj!sdfnj_3NB',
      database: 'liftz_db',
      logging: true,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ExerciseModule,
    RoutineModule,
  ],
})
export class AppModule {}
