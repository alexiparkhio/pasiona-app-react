const { models: { Card } } = require('../../db');
const { utils: { sanitize } } = require('../shared');

/**
 * Retrieves all Cards from the database, if they exist. 
 * 
 * @returns {Promise<Card[]>} Returns an array of all Cards currently available on the database, or an empty array if there is none.
 */
const retrieveCards = async () => {
  const cards = await Card.find().lean();

  return cards ? sanitize(cards) : [];
}

module.exports = { retrieveCards };