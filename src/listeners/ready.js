'use strict';

const { Listener } = require('@sapphire/framework');
const url = require('../database/connect');

exports.ReadyListener = class extends Listener {
  run(client) {
    const { username, id } = client.user;
    this.container.logger.info(`[BOT] Запущен. Авторизован как ${username} [${id}]`);
    url.connect();
  }
};
