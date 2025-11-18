import { beforeAll, afterAll, afterEach } from '@jest/globals';

beforeAll(async () => {
  console.log('Test environment setup');
});

afterEach(() => {
  console.log('Test cleanup');
});

afterAll(async () => {
  console.log('Test environment teardown');
});
