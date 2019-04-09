'use strict';

const DataSource   = require('./DataSource');             // small layer to isolate our hardcoded data
const dataSource   = new DataSource(require('./data'));   // initialize our data layer with the hardcoded data

module.exports = {

  /**
   * Main method for our API, displays a welcome message.
   * @returns {Promise<{statusCode: number, body: string}>}
   */
  main: async function () {
    return { statusCode: 200, body: JSON.stringify({ message: 'Serverless playground.' })}
  },

  /**
   * Return a list of colors filtered by a search term
   * @param {Object} event
   * @returns {Promise<{statusCode: number, body: string}>}
   */
  colors: async function (event) {
    try {
      const colors = await dataSource.get(event.queryStringParameters);
      return { statusCode: 200, body: JSON.stringify({ colors: colors })}
    } catch(error) {
      return {statusCode: 200, body: JSON.stringify({error: error.message})}
    }
  },

};
