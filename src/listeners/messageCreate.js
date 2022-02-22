'use strict';

const { Listener } = require('@sapphire/framework');
const server = require('../database/models/server');

exports.MessageListener = class extends Listener {
  async run(message) {
    const { guild } = message;
    if (message.system) return;
    const el = await server.findOne({ guild: guild.id });
    if (!el) {
      server.create({ guild: guild.id });
      this.container.logger.info(`Сервер ${guild.name} добавлен в базу данных`);
    }
  }
};
