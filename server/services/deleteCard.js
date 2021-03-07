const { models: { Card } } = require('../../db');
const { errors: { NotFoundError }, utils: { validate } } = require('../shared');

/**
 * Deletes an existing Card element on the database.
 * 
 * @param {string} cardId The Card's unique ID.
 * 
 * @returns {Promise<void>} Returns an empty promise on a successful deletion.
 * 
 * @throws {NotFoundError} Throws an error if the Card does not exist on the database.
 */
const deleteCard = async ({ cardId }) => {
  validate.string(cardId, 'cardId');

  const card = await Card.findById(cardId);
  if (!card) throw new NotFoundError(`Card with id ${cardId} not found`);

  await Card.findByIdAndRemove(cardId);
}

module.exports = { deleteCard };