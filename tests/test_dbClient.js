import { expect } from 'chai';
import dbClient from '../utils/db';

describe('dB Client', () => {
  it('should be alive', () => {
    expect(dbClient.isAlive()).to.equal(true);
  });
});
