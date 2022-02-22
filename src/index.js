'use strict';

const { SapphireClient } = require('@sapphire/framework');
require('dotenv').config();
require('@sapphire/plugin-logger/register');

const client = new SapphireClient({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
  defaultPrefix: '?',
  disableMentionPrefix: true,
});

client.login(process.env.DISCORD_TOKEN);
