const { Schema } = require('mongoose');

const card = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  created: { type: Date, required: true, default: new Date() }
});

module.exports = { card };