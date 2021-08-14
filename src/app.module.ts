import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercise } from './exercise/entities/exercise.entity';
import { ExercisesModule } from './exercise/exercises.module';

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
      entities: ['dist/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
    ExercisesModule,
  ],
})
export class AppModule {}
