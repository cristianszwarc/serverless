'use strict';

/**
 * Small layer to isolate hardcoded data, this could/should be replaced/extended to load data from other sources
 */
class DataSource {
  /**
   * Stores the initial properties of this DataSource object.
   * AKA: holds the data to be used.
   * @param {Array} data
   */
  constructor(data) {
    if (!Array.isArray(data)) { throw new Error('Invalid data to work with.') }
    this.data = data;
  }

  /**
   * Returns a promise that is resolved after the data is filtered.
   * @param {Object} queryStringParameters
   * @param {String} queryStringParameters.search
   * @returns {Promise}
   */
  get(queryStringParameters) {
    return new Promise((resolve) => {
      // simulate a very bad database doing a full text search across all properties, awful!
      if (queryStringParameters && queryStringParameters.search) {
        resolve(this.data.filter(item => JSON.stringify(item).toLowerCase().includes(queryStringParameters.search.toLowerCase())));
      }

      // or return everything
      resolve(this.data);
    });
  }
}

module.exports = DataSource;