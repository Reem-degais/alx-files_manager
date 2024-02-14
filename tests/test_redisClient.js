import { expect } from 'chai';
import redisClient from '../utils/redis';

describe('redis Client', () => {
  it('should be alive', () => {
    expect(redisClient.isAlive()).to.equal(true);
  });
});
