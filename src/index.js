require("dotenv").config()
import { commands } from "./slash";

const { Collection, Client, Formatters, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds]});

const commandList = new Collection();

const commandData = [];

for (const command of commands) {
	commandList.set(command.data.name, command);
	commandData.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(token);
if (production) {
	rest
		.put(Routes.applicationCommands(clientId), { body: commandData })
		.then(() => console.log("Successfully registered application commands."))
		.catch(console.error);
} else if (!production && devGuild) {
	rest
		.put(Routes.applicationGuildCommands(clientId, devGuild), { body: commandData })
		.then(() => console.log("Successfully registered application guild commands!"))
		.catch(console.error);

}

client.on("ready", () => console.log("Ready!"));

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isChatInputCommand()) return;
	if (!interaction.guild) return;

	const command = commandList.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(
			client,
			interaction
		);
	} catch (error) {
		console.error(error);
		await interaction.reply({
			content: "There was an error while executing this command!",
			ephemeral: true,
		});
	}
});
client.login(process.env.TOKEN);