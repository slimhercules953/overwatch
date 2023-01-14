const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const os = require('os');
const { version } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("botstats")
		.setDescription("Sends the stats of the bot"),
	async execute(client, interaction) {
    let totalSec = (client.uptime / 1000)
    let days = Math.floor(totalSec / 86400)
    totalSec %= 86400
    let hours = Math.floor(totalSec / 3600)
    totalSec %= 3600
    let minutes = Math.floor(totalSec / 60)
    let seconds = Math.floor(totalSec % 60)
    let uptime = `**${days}** days, **${hours}** hours, **${minutes}** minutes, **${seconds}** seconds`
		/*const replyEmbed = new EmbedBuilder()
			.setColor("#4a4c4e")
			.setTitle("Stats")
			.setDescription(
				`The bot has been online for ${uptime}. The ping of the bot is **${client.ws.ping}ms** Latency! The bot is in ${client.guilds.cache.size} servers. The bot is watching ${client.users.cache.size} members. The bot is using ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB.`
			)
			.setTimestamp();*/ 
    const embed = new EmbedBuilder()
      .setColor('#4a4c4e')
      .setTitle('Bot Statistics')
      .addFields(
        { name: 'Guilds', value: `${client.guilds.cache.size}`, inline: true },
        { name: 'Users', value: `${client.users.cache.size}`, inline: true },
        { name: 'Channels', value: `${client.channels.cache.size}`, inline: true },
        { name: 'Discord.js version', value: `${version}`, inline: true },
        { name: 'Node.js version', value: `${process.version}`, inline: true },
        { name: 'Uptime', value: `${uptime}`, inline: true },
        { name: 'Memory usage', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, inline: true },
            )
      .setTimestamp()
		interaction.reply({ embeds: [embed]});
	},
};