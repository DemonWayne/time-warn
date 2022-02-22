'use strict';

const { MessageEmbed } = require('discord.js');
const { days } = require('./data/schedule');

exports.check = async (client, date) => {
  const { day, time } = date;
  const numberTime = time.replace(/:/, '.');
  const lessons = days[day];
  if (!lessons) return;
  const times = Object.keys(lessons);
  const timeMinutes = times.map(t => Number(t.replace(/:/, '.')));
  const closestRight = Math.max(...timeMinutes.filter(m => numberTime > m - 0.5 && numberTime < m));
  const nearTime = String(closestRight).replace(/[./]/g, ':');
  const lesson = nearTime ? lessons[nearTime] : lessons[time];
  if (!lesson) return;
  const { name, url, cabinet } = lesson;
  const channel = client.channels.cache.get('CHANNEL_ID');
  checkChannel(channel);
  const everyone = channel.guild.roles.cache.get(channel.guildId).toString();
  const prevMsgs = await channel.messages.fetchPinned();
  const prevMsg = prevMsgs.filter(msg => msg.author.id === client.user.id).first();
  if (prevMsg.embeds.length !== 0 && prevMsg.embeds[0].fields[0].value.includes(name)) {
    return;
  }
  prevMsg.unpin();
  channel
    .send({
      content: `${everyone}`,
      embeds: [
        new MessageEmbed()
          .setTitle(`**На часах ${time}!**`)
          .addField('Начинается урок', `**${name ? `\`${name}\`` : ''}**`)
          .addField(
            `${url !== '' ? 'Ссылка' : 'Кабинет'}`,
            `**${url !== '' ? `${url}` : `${cabinet ? `${cabinet}` : 'Не указан'}`}**`,
          )
          .setTimestamp(),
      ],
    })
    .then(msg => msg.pin());
};

function checkChannel(channel) {
  if (typeof channel === 'undefined') {
    throw new Error(`Вы не указали канал отправки!`);
  }
}
