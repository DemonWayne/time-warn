'use strict';

const { Listener } = require('@sapphire/framework');
const server = require('../database/models/server');

exports.GuildDelete = class extends Listener {
  async run(guild) {
    const { name, id } = guild;
    this.container.logger.info(`[Bot Kick] Бот удалён с сервера - ${name} [${id}]`);
    const el = await server.findOne({ guild: guild.id });
    if (el) {
      el.delete();
      this.container.logger.info(`Сервер ${guild.name} удалён из базы данных`);
    }
  }
};
