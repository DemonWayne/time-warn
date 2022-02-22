'use strict';

const { Schema, model } = require('mongoose');

const guild = new Schema({
  guild: { type: String, required: true },
  language: { type: String, default: 'eu-RU' },
  duration: { type: Number, default: 40 },
});

module.exports = model('guild', guild);
