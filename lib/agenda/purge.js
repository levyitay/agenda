'use strict';
const debug = require('debug')('agenda:purge');

/**
 * Removes all jobs from queue
 * @name Agenda#purge
 * @function
 * @returns {Promise} resolved when job cancelling fails or passes
 */
module.exports = async function() {
  // @NOTE: Only use after defining your jobs
  const {result} = await this._collection.deleteMany({});
  
  return result.deletedCount;
};
