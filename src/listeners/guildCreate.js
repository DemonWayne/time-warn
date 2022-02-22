'use strict';

const { Listener } = require('@sapphire/framework');
const server = require('../database/models/server');

exports.GuildCreate = class extends Listener {
  async run(guild) {
    const { name, id } = guild;
    this.container.logger.info(`[Bot Add] Бот добавлен на сервер - ${name} [${id}]`);
    const el = await server.findOne({ guild: guild.id });
    if (!el) {
      server.create({ guild: guild.id });
      this.container.logger.info(`Сервер ${guild.name} добавлен в базу данных`);
    }
  }
};
