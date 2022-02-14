'use strict';

const { MessageEmbed } = require('discord.js');
const { days } = require('./config');

exports.check = async (client, day, time) => {
  const lessons = days[day];
  if (!lessons) return;
  console.log(time);
  const lesson = lessons[time];
  if (!lesson) return;
  const { name, url, cabinet } = lesson;
  const channel = client.channels.cache.get('CHANNEL_ID');
  const prevMsgs = await channel.messages.fetchPinned();
  const prevMsg = prevMsgs.filter(msg => msg.author.id === client.user.id).first();
  if (prevMsg.embeds.length !== 0 && prevMsg.embeds[0].fields[0].value.includes(name)) {
    return;
  }
  prevMsg.unpin();
  const everyone = channel.guild.roles.cache.get(channel.guildId).toString();
  channel
    .send({
      content: `${everyone}`,
      embeds: [
        new MessageEmbed()
          .setTitle(`**На часах ${time}!**`)
          .addField('Начался урок', `**${name ? `\`${name}\`` : ''}**`)
          .addField(
            `${url !== '' ? 'Ссылка' : 'Кабинет'}`,
            `**${url !== '' ? `${url}` : `${cabinet ? `${cabinet}` : 'Не указан'}`}**`,
          )
          .setTimestamp(),
      ],
    })
    .then(msg => msg.pin());
};
