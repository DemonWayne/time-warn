'use strict';

const { Listener } = require('@sapphire/framework');
const { check } = require('../Scheduler');

exports.ReadyListener = class extends Listener {
  run(client) {
    const { username, id } = client.user;
    this.container.logger.info(
      `[BOT] Запущен. Авторизован как ${username} [${id}]\n` +
        `Ссылка приглашения - ${client.generateInvite({ scopes: ['bot'], permissions: ['216064'] })}`,
    );
    runCheck(client);
  }
};

function date() {
  const day = new Date().getDay();
  const time = new Date().toLocaleString('ru-RU', { hour12: false, hour: 'numeric', minute: 'numeric' });
  return { day, time };
}

function runCheck(client) {
  setInterval(() => {
    check(client, date());
  }, 10 * 1000);
}
