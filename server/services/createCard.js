const { models: { Card } } = require('../../db');
const { errors: { NotAllowedError }, utils: { validate } } = require('../shared');

/**
 * Created a new Card element on the database. Said element should have a title, description and a date of creation.
 * 
 * @param {string} title The Card's main title.
 * @param {string} description The Card's main content description.
 * 
 * @returns {Promise<void>} Returns an empty promise on a successful creation.
 * 
 * @throws {NotAllowedError} Throws an error if a Card with the same exact information currently exists on the database.
 */
module.exports = async ({ title, description }) => {
  validate.string(title, 'title');
  validate.string(description, 'description');

  const card = await Card.findOne({ title, description });
  if (card) throw new NotAllowedError('A Card with that exact same information already exists on the database');

  await Card.create({ title, description, created: new Date() });
}