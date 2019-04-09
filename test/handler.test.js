'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const {assert, expect} = chai;
const handler = require('../src/handler.js');
const colors = require('../src/data.js');

describe('handler', function() {

  describe('main()', async function() {
    it('should return our welcome message', async function() {
      const out = await handler.main();
      expect(out).to.deep.equal({ statusCode: 200, body: '{"message":"Serverless playground."}' })
    });
  });

  describe('colors()', async function() {
    it('should return error when event.queryStringParameters are not present', async function() {
      const out = await handler.colors();
      expect(out).to.deep.equal({ statusCode: 200, body: '{"error":"Cannot read property \'queryStringParameters\' of undefined"}' })
    });

    it('should return all colors', async function() {
      const out = await handler.colors({queryStringParameters: {}});
      expect(out).to.deep.equal({ statusCode: 200, body: JSON.stringify({ colors: colors }) });
    });

    it('should return no colors', async function() {
      const out = await handler.colors({queryStringParameters: { search: 'non existing color' }});
      expect(out).to.deep.equal({ statusCode: 200, body: JSON.stringify({ colors: [] }) });
    });

    it('should 12 blue colors', async function() {
      const out = await handler.colors({queryStringParameters: { search: 'Blue' }});
      assert.isObject(out);
      assert.isString(out.body);
      const parsedBody = JSON.parse(out.body);
      assert.isArray(parsedBody.colors);
      assert.lengthOf(parsedBody.colors, 12);
    });

  });
});
