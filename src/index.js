require("dotenv").config()
const { REST } = require("@discordjs/rest");
const { commands } = require("./slash");

const { Collection, Client, Formatters, GatewayIntentBits, Routes } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds]});

const commandList = new Collection();

const commandData = [];
for (const command of commands) {
	commandList.set(command.data.name, command);
	commandData.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
let production = true;
const clientId = process.env.clientId;
if (production) {
	rest
		.put(Routes.applicationCommands(clientId), { body: commandData })
		.then(() => console.log("Successfully registered application commands. Testing"))
		.catch(console.error);      
} else if (!production && devGuild) {
	rest 
		.put(Routes.applicationGuildCommands(clientId, devGuild), { body: commandData })
		.then(() => console.log("Successfully registered application guild commands!"))
		.catch(console.error);

}
const avatar = [
  "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/5c/PI_Overwatch_Logo_Black.png/revision/latest/scale-to-width-down/120?cb=20160706115645",
  "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/ef/PI_Loot_Box.png/revision/latest/scale-to-width-down/120?cb=20160715121219",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/ff/PI_Moira_Cute_Moira.png/revision/latest/scale-to-width-down/120?cb=20180217155114",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8a/PI_Orisa_Cute_Orisa.png/revision/latest/scale-to-width-down/120?cb=20180217155119",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/29/PI_Winston_Cute_Winston.png/revision/latest/scale-to-width-down/120?cb=20180217155133",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f0/PI_Reaper_Cute_Reaper.png/revision/latest/scale-to-width-down/120?cb=20180217155122",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d3/PI_D.Va_Cute_D.Va.png/revision/latest/scale-to-width-down/120?cb=20180217155139",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2a/PI_Widowmaker_Cute_Widowmaker.png/revision/latest/scale-to-width-down/120?cb=20180217155132",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/ce/PI_L%C3%BAcio_Cute_L%C3%BAcio.png/revision/latest/scale-to-width-down/120?cb=20180217155109",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/74/PI_Bastion_Cute_Bastion.png/revision/latest/scale-to-width-down/120?cb=20180217155138",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/9e/PI_Tracer_Cute_Tracer.png/revision/latest/scale-to-width-down/120?cb=20180217155130",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a7/PI_Symmetra_Cute_Symmetra.png/revision/latest/scale-to-width-down/120?cb=20180217155128",
  "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a0/PI_Zenyatta_Cute_Zenyatta.png/revision/latest/scale-to-width-down/120?cb=20180217155136",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/ef/PI_Genji_Cute_Genji.png/revision/latest/scale-to-width-down/120?cb=20180217155105",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d5/PI_Roadhog_Cute_Roadhog.png/revision/latest/scale-to-width-down/120?cb=20180217155124",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a1/PI_Pharah_Cute_Pharah.png/revision/latest/scale-to-width-down/120?cb=20180217155120",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/dc/PI_McCree_Cute_McCree.png/revision/latest/scale-to-width-down/120?cb=20180217155110",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6f/PI_Junkrat_Cute_Junkrat.png/revision/latest/scale-to-width-down/120?cb=20180217155108",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/87/PI_Zarya_Cute_Zarya.png/revision/latest/scale-to-width-down/120?cb=20180217155134",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c1/PI_Reinhardt_Cute_Reinhardt.png/revision/latest/scale-to-width-down/120?cb=20180217155123",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/28/PI_Ana_Cute_Ana.png/revision/latest/scale-to-width-down/120?cb=20180217155137",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b6/PI_Mei_Cute_Mei.png/revision/latest/scale-to-width-down/120?cb=20180217155112",
  "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/98/PI_Mercy_Cute_Mercy.png/revision/latest/scale-to-width-down/120?cb=20180217155113",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/56/PI_Hanzo_Cute_Hanzo.png/revision/latest/scale-to-width-down/120?cb=20180217155107",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b8/PI_S76_Cute_Soldier_76.png/revision/latest/scale-to-width-down/120?cb=20180217155126",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/1c/PI_Doomfist_Cute_Doomfist.png/revision/latest/scale-to-width-down/120?cb=20180217155100",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d4/PI_Torbj%C3%B6rn_Cute_Torbj%C3%B6rn.png/revision/latest/scale-to-width-down/120?cb=20180217155129",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/eb/PI_Sombra_Cute_Sombra.png/revision/latest/scale-to-width-down/120?cb=20180217155127",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/0d/0000000380EE2.png/revision/latest/scale-to-width-down/120?cb=20220825104902",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/bc/0000000170AF.png/revision/latest/scale-to-width-down/120?cb=20220825104155",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2d/500CompetitivePlayerIcon.png/revision/latest/scale-to-width-down/120?cb=20160804100813",
    "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/57/PI_Credit.png/revision/latest/scale-to-width-down/120?cb=20160715120916",
  "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/51/PI_Training_Bot.png/revision/latest/scale-to-width-down/120?cb=20160715121539",
    ];
let currentAvatar = 0;


client.on("ready", () => {
  console.log("Ready!")
  setInterval(() => {
  client.user.setAvatar(avatar[currentAvatar])
    .then(() => {
    console.log(`Profile picture set to ${avatar[currentAvatar]}`);
    currentAvatar++;
    if (currentAvatar >= avatar.length) currentAvatar = 0;
  })
  .catch(console.error);
  }, 60 * 60 * 1000)
})

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
//console.log(commandData)

client.login(process.env.TOKEN);
