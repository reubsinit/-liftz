import { Repository } from 'typeorm';
import { MockType } from '../utils/MockType';

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({
    save: jest.fn((entity) => entity),
    findOne: jest.fn((id) => ({ id })),
    findByIds: jest.fn((entity) => entity),
    update: jest.fn((id, entity) => entity),
  }),
);
