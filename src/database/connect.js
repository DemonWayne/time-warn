'use strict';

exports.connect = () => {
  require('dotenv').config();
  const mongoose = require('mongoose');
  const { Logger } = require('@sapphire/plugin-logger');

  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.on('connected', () => new Logger().info('[Database] База данных подключена!'));
};
