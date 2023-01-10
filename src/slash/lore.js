const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("lore")
		.setDescription("Sends the lore of an Overwatch character.")
    .addStringOption(option =>
		option.setName('character')
			.setDescription('The character lore')
			.setRequired(true)
			.addChoices(
				{ name: 'Ana', value: 'lore_ana' },
				{ name: 'Baptiste', value: 'lore_baptiste' },
				{ name: 'Brigitte', value: 'lore_brigitte' },
				{ name: 'Kiriko', value: 'lore_kiriko' },
				{ name: 'Lucio', value: 'lore_lucio' },
				{ name: 'Mercy', value: 'lore_mercy' },
				{ name: 'Moira', value: 'lore_moira' },
				{ name: 'Zenyatta', value: 'lore_zenyatta' },
			)),
	async execute(client, interaction) {
   const value =  interaction.options.getString('character');
    switch (value) {
        case 'lore_ana':
        const anaEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("The lore of Ana Amari")
  			.setDescription(
  				"Ana Amari is a playable character in the popular video game Overwatch. She is a former member of Overwatch, a elite task force that protected the world from conflicts, and one of the founders of the organization. Ana is a skilled sniper and a battle-hardened veteran who lost her right eye in combat. After years of fighting, Ana thought she had retired to a peaceful life, but after the Overwatch was disbanded, she found herself drawn back into the action as Talon (an organization dedicated to causing chaos and destabilization around the world) began to make its move. She returns as a combat medic, using her abilities to support her allies."
  			)
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/76/Ana.png/revision/latest/scale-to-width-down/143?cb=20160715094551"
  			)
        interaction.reply({ embeds: [anaEmbed]});
      break;
      case 'lore_baptiste':
        const baptisteEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("The lore of Jean-Baptiste Augustin")
  			.setDescription(
  				"Jean-Baptiste Augustin is also known as Baptiste. He is a combat medic and a former member of the Haitian Talon cell. He was orphaned at a young age and found himself living in the slums of Port-au-Prince. He is a former soldier who became disillusioned with the direction his country was heading and joined Talon as a way to make a difference, using his skills as a medic to help those in need. He developed a powerful exo-suit that gives him the ability to jump higher, move faster, and even deploy a device that creates a healing field for himself and his allies. He also carries a weapon that can fire a three-round-burst that deals damage to enemies. His history is complex and morally ambiguos, he believed that he is doing the right thing joining Talon, but eventually he realized that his actions are causing more harm than good, and starts to question his alliance with the organization."
  			)
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/01/Baptiste-portrait.png/revision/latest/scale-to-width-down/162?cb=20190227081553"
  			)
        interaction.reply({ embeds: [baptisteEmbed]});
      break;
      case 'lore_brigitte':
        const brigitteEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("The lore of Brigitte Lindholm")
  			.setDescription(
  				"Brigitte Lindholm is a playable character in the popular video game Overwatch. She is the daughter of Torbjorn and squire of Reinhardt, two of the original members of the Overwatch. She grew up listening to her father's stories about the heroes of Overwatch and dreamed of one day becoming a hero herself. She learned how to fight and build armor from her father and after Reinhardt saved her father's life, she decided to become his squire and followed him on his adventures. She is a strong and determined individual, with a deep sense of justice and sense of duty, she's also a very skilled engineer and is dedicated to protecting her allies."
  			)
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8a/Brigitte_Concept.png/revision/latest/scale-to-width-down/255?cb=20180228195511"
  			)
        interaction.reply({ embeds: [brigitteEmbed]});
      break;
      case 'lore_kiriko':
        const kirikoEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("The lore of Kiriko Yamagami")
  			.setDescription(
  				`Kiriko Yamagami was raised by her grandmother and mother in Kanezaka. A highly spiritual woman, her grandmother's spiritual beliefs strongly influenced Kiriko, and shaped her fighting style. Kiriko's mother was a fierce ninja, who believed in action, standing up for oneself, and fighting for what was right. Training quietened her mind, and opened her to the guidance of the Fox Spirit, while her bond with the spirit allowed Kiriko to protect those who couldn't defend themselves. As such, she followed both paths. Kiriko's mother trained Genji and Hanzo Shimada in the way of the sword, as well as other ninja skills, such as how to wall climb. As such, Kiriko both grew up and learned alongside the duo, becoming a sort of "cute, little niece figure" to them.`
  			)
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d4/Kiriko-portrait.png/revision/latest/scale-to-width-down/293?cb=20221114213127"
  			)
        interaction.reply({ embeds: [kirikoEmbed]});
      break;
      case 'lore_lucio':
        const lucioEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("The lore of Lucio Correia dos Santos")
  			.setDescription(
				`Lucio Correia dos Santos is a playable character in the popular video game Overwatch. He is a Brazilian DJ and freedom fighter who rose to fame as a musician, using his songs as a platform to spread messages of hope and inspiration. He has the ability to manipulate sound waves, both as a weapon and to provide speed boosts and healing to his allies. He also uses a Soundwave ability, which knocks back enemies, and an ultimate ability called "Sound Barrier" that provides a massive shield to nearby allies. Lucio grew up in the favelas of Rio de Janeiro and witnessed first hand the struggles of the people there, this led him to become a voice for the oppressed and using his music as a way of uplifting them and bringing change. He is an optimistic and charismatic person who wants to make the world a better place and help others. He's a popular hero among the players and is known for his energetic playstyle and flashy abilities.`
  			)
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8c/Lucio-portrait.png/revision/latest/scale-to-width-down/189?cb=20160620004212"
  			)
        interaction.reply({ embeds: [lucioEmbed]});
      break;
      case 'lore_mercy':
        const mercyEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("The lore of Angela Ziegler")
  			.setDescription(
  				"Dr. Angela Ziegler, also known as Mercy, is a Swiss medical doctor and a member of Overwatch, a peacekeeping organization. She is a skilled field medic and has the ability to fly using her Valkyrie suit. She is known for her compassion and desire to help others, and often puts the well-being of her patients above her own safety. Despite her kind nature, she is also a formidable opponent and is not afraid to defend herself or her allies when necessary."
  			)
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d2/Mercy-portrait.png/revision/latest/scale-to-width-down/1000?cb=20160620024553"
  			)
        interaction.reply({ embeds: [mercyEmbed]});
      break;
      case 'lore_moira':
        const moiraEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("The lore of Moira O'Deorain")
  			.setDescription(
  				"Moira O'Deorain is a genetically-engineered life form, former member of the covert operations division of Overwatch called Blackwatch, where her unorthodox methods and controversial experiments eventually led to her expulsion, after this, she joins Talon, an organization dedicated to causing chaos and destabilization around the world, being one of the top scientists, working on biotic technologies. Moira is a complex character with unclear motivations, and her actions pushes the limits of science and morality, which make her a controversial figure among the players, some see her as a villain while others see her as an antihero just trying to do the best she can in a world of chaos and conflict."
  			)
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b5/Moira.png/revision/latest/scale-to-width-down/162?cb=20171104021652"
  			)
        interaction.reply({ embeds: [moiraEmbed]});
      break;
      case 'lore_zenyatta':
        const zenyattaEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("The lore of Zenyatta")
  			.setDescription(
  				`He is an omnic monk and member of the Shambali Monastery, a group of omnics who seek enlightenment through meditation and peaceful contemplation. Zenyatta believes that true peace can only be achieved when all beings understand one another, and seeks to help others find inner peace through the guidance of the Shambali Monastery, his life as monk gave him a philosophy of unity, empathy and understanding. He has an enigmatic and wise personality and is respected by many. Although as a member of a monk order, he also engage into conflicts when he sees it as necessary to protect others.`
  			)
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/92/Zenyatta-portrait.png/revision/latest/scale-to-width-down/269?cb=20160620015935"
  			)
        interaction.reply({ embeds: [zenyattaEmbed]});
      break;
      default:
        interaction.reply('That is not a support character.');
}
		/*const replyEmbed = new EmbedBuilder()
			.setColor("#4a4c4e")
			.setTitle("About")
			.setDescription(
				"Lucio Correia dos Santos is a playable character in the popular video game Overwatch. He is a Brazilian DJ and freedom fighter who rose to fame as a musician, using his songs as a platform to spread messages of hope and inspiration. He has the ability to manipulate sound waves, both as a weapon and to provide speed boosts and healing to his allies. He also uses a Soundwave ability, which knocks back enemies, and an ultimate ability called "Sound Barrier" that provides a massive shield to nearby allies. Lucio grew up in the favelas of Rio de Janeiro and witnessed first hand the struggles of the people there, this led him to become a voice for the oppressed and using his music as a way of uplifting them and bringing change. He is an optimistic and charismatic person who wants to make the world a better place and help others. He's a popular hero among the players and is known for his energetic playstyle and flashy abilities."
			)
			.setURL("https://overwatch.blizzard.com/en-us/")
			.setThumbnail(
				"https://cdn.imgbin.com/13/21/4/imgbin-long-sleeved-t-shirt-crew-neck-t-shirt-iYt4wUW7hw07YKt3xrAQ1Z78M.jpg"
			)
			.setTimestamp();*/
		//interaction.reply({ embeds: [replyEmbed], ephemeral: true });
	},
};