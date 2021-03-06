import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ExerciseModule } from './model/exercise/exercise.module';
import { RoutineModule } from './model/routine/routine.module';
import { object, string, number } from 'joi';
import { DatabaseModule } from './db/database.module';
import { ExceptionsLoggerFilter } from './utils/exceptionsLogger.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: object({
        POSTGRES_HOST: string().required(),
        POSTGRES_PORT: number().required(),
        POSTGRES_USER: string().required(),
        POSTGRES_PASSWORD: string().required(),
        POSTGRES_DB: string().required(),
        PORT: number(),
      }),
    }),
    DatabaseModule,
    ExerciseModule,
    RoutineModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionsLoggerFilter,
    },
  ],
})
export class AppModule {}
