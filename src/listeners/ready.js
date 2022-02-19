'use strict';

const { Listener } = require('@sapphire/framework');
const { DateTime } = require('luxon');
const { check } = require('../utils');

exports.ReadyListener = class extends Listener {
  run(client) {
    const { username, id } = client.user;
    this.container.logger.info(
      `[BOT] Запущен. Авторизован как ${username} [${id}]\n` +
        `[Ready] Дата: ${DateTime.local().setLocale('RU').toFormat('yyyyг. dd LLL')}`,
    );
    console.log(`Ссылка приглашения - ${client.generateInvite({ scopes: ['bot'], permissions: ['216064'] })}`);
    setInterval(() => {
      const day = DateTime.local().toLocaleString({ weekday: 'long' });
      let time = DateTime.local().toFormat('H:mm');
      check(client, day, time);
    }, 20 * 1000);
  }
};
