'use strict';

const { days } = require('./config');

exports.check = (client, day, time) => {
  const lessons = days[day];
  if (!lessons) return;
  const lesson = lessons[time];
  if (!lesson) return;
  const { name, url, cabinet } = lesson;
  const channel = client.channels.cache.get('CHANNEL_ID');
  const everyone = channel.guild.roles.cache.get(channel.guildId).toString();
  channel.send(
    `**${everyone} На часах ${time}!
    Начался урок ${name ? `\`${name}\`` : ''}
    ${url !== '' ? `Ссылка - ${url}` : `${cabinet ? `Кабинет - cabinet` : ''}`}**`,
  );
};
