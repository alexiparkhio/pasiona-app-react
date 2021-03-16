const { Schema } = require('mongoose');

module.exports = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  created: { type: Date, required: true, default: new Date() },
  updated: { type: Date }
});