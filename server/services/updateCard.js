const { models: { Card } } = require('../../db');
const { errors: { NotFoundError }, utils: { validate } } = require('../shared');

/**
 * Updates an existing Card's title and/or description.
 * 
 * @param {string} cardId The Card's unique ID.
 * @param {string} title The Card's main title.
 * @param {string} description The Card's main content description.
 * 
 * @returns {Promise<void>} Returns an empty promise on a successful update.
 * 
 * @throws {NotFoundError} Throws an error if the Card does not exist on the database.
 */
const updateCard = async ({ cardId, title, description }) => {
  validate.string(cardId, 'cardId');
  validate.string(title, 'title');
  validate.string(description, 'description');

  const card = await Card.findById(cardId);
  if (!card) throw new NotFoundError(`Card with id ${cardId} not found`);

  await Card.findByIdAndUpdate(cardId, { title, description, updated: new Date() });
}

module.exports = { updateCard };