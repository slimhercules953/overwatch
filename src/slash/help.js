const { SlashCommandBuilder, EmbedBuilder }= require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("about")
		.setDescription("Sends an ephemeral message with info about the bot."),
	async execute(client, interaction) {
        const replyEmbed = new EmbedBuilder()
			.setColor("#4a4c4e")
			.setTitle("About")
			.setDescription(
				"An Overwatch stats bot for all of stats relating to Overwatch.Open the slash command menu to view a list of commands."
			)
			.setURL("https://overwatch.blizzard.com/en-us/")
			.setThumbnail(
				"https://cdn.imgbin.com/13/21/4/imgbin-long-sleeved-t-shirt-crew-neck-t-shirt-iYt4wUW7hw07YKt3xrAQ1Z78M.jpg"
			)
			.setTimestamp();
		interaction.reply({ embeds: [replyEmbed], ephemeral: true });
    }
}