'use strict';

const { Listener } = require('@sapphire/framework');
const { Logger } = require('@sapphire/plugin-logger');
const { DateTime } = require('luxon');
const { check } = require('../utils');

exports.ReadyListener = class ReadyListener extends Listener {
  run(client) {
    const { username, id } = client.user;
    new Logger().info(`[BOT] Запущен. Авторизован как ${username} [${id}]`);
    new Logger().info(`[Ready] Дата и время: ${DateTime.local().setLocale('RU').toFormat('yyyyг. dd LLL | TT')}`);
    console.log(`Ссылка приглашения - ${client.generateInvite({ scopes: ['bot'], permissions: ['216064'] })}`);
    const time = DateTime.local().toFormat('H:mm');
    const day = DateTime.local().toLocaleString({ weekday: 'long' });
    setInterval(() => {
      check(client, day, time);
    }, 40 * 1000);
  }
};
