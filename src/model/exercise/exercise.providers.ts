import { Connection } from 'typeorm';
import { Exercise } from './entities/exercise.entity';

export const exerciseProviders = [
  {
    provide: 'EXERCISE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Exercise),
    inject: ['DATABASE_CONNECTION'],
  },
];
