'use strict';

const { Schema, model } = require('mongoose');

const schedule = new Schema(
  {
    guild: { type: String, required: true },
    day: { type: String, required: true },
    times: { type: Object },
    lessons: { type: Object },
  },
  { versionKey: false },
);

module.exports = model('schedule', schedule);
