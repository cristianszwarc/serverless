'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const {assert, expect} = chai;
const DataSource = require('../src/DataSource.js');

describe('DataSource', function() {

  describe('constructor()', async function() {
    it('should fail for non array data', async function() {
      try {
        const dataSource = new DataSource('non array');
      } catch (error) {
        assert.strictEqual(error.message, 'Invalid data to work with.');
      }
    });

    it('should work with an array', async function() {
      const dataSource = new DataSource([1,2,3]);
      const result = await dataSource.get();
      expect(result).to.deep.equal([1,2,3]);
    });
  });

});
