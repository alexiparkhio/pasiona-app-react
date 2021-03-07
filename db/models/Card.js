const { model } = require('mongoose');
const { card } = require('../schemas');

const Card = model('Card', card);

module.exports = { Card };