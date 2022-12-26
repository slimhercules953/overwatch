require("dotenv").config()

const { Collection, Client, Formatters, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds]});

client.on("ready", () => console.log("Ready!"));
client.login(process.env.TOKEN);