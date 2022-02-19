'use strict';

const { SapphireClient } = require('@sapphire/framework');
require('@sapphire/plugin-logger/register');
require('dotenv').config();

const client = new SapphireClient({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
});

client.login(process.env.DISCORD_TOKEN);
