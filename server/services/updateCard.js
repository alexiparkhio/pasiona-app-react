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
module.exports = async ({ cardId, data = {} }) => {
  validate.string(cardId, 'cardId');
  data.title && validate.string(data.title, 'title');
  data.description && validate.string(data.description, 'description');

  const card = await Card.findById(cardId);
  if (!card) throw new NotFoundError(`Card with id ${cardId} not found`);

  await Card.findByIdAndUpdate(cardId, { ...data, updated: new Date() });
}