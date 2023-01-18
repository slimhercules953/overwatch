const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("stats")
		.setDescription("Sends the stats of a support character.")
    .addSubcommand(subcommand =>
		subcommand
			.setName('character')
			.setDescription('Info about the character')
			.addStringOption(option =>
      option.setName('character')
        .setDescription('Info about the character stats')
        //.addRequired(true)
        .addChoices(
          		{ name: 'Ana', value: 'hero_ana' },
  				{ name: 'Baptiste', value: 'hero_baptiste' },
  				{ name: 'Brigitte', value: 'hero_brigitte' },
  				{ name: 'Kiriko', value: 'hero_kiriko' },
  				{ name: 'Lucio', value: 'hero_lucio' },
  				{ name: 'Mercy', value: 'hero_mercy' },
  				{ name: 'Moira', value: 'hero_moira' },
  				{ name: 'Zenyatta', value: 'hero_zenyatta' },
        )
      ))
	  .addSubcommand(subcommand =>
		subcommand
			.setName('abilities')
			.setDescription('Info about character abilities')
      .addStringOption(option =>
  		option.setName('character')
  			.setDescription('The ability stats')
  			.setRequired(true)
  			.addChoices(
  				{ name: 'Ana', value: 'ability_ana' },
  				{ name: 'Baptiste', value: 'ability_baptiste' },
  				{ name: 'Brigitte', value: 'ability_brigitte' },
  				{ name: 'Kiriko', value: 'ability_kiriko' },
  				{ name: 'Lucio', value: 'ability_lucio' },
  				{ name: 'Mercy', value: 'ability_mercy' },
  				{ name: 'Moira', value: 'ability_moira' },
  				{ name: 'Zenyatta', value: 'ability_zenyatta' },
  			)
      )),
	async execute(client, interaction) {
   const value =  interaction.options.getString('character');
    switch (value) {
        case 'hero_ana':
        const anaEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("One day I'll end up in Fiji")
  			.addFields(
        { name: '__Health:__', value: `200 health points`, inline: true },
        { name: '__Damage/healing with rifle:__', value: `75 damage/healing over 0.58 seconds`, inline: true },
        { name: '__Rate of Fire:__', value: `0.8 seconds between shots`, inline: true },
        { name: '__Ammo:__', value: `15 shots in her biotic rifle`, inline: true },
        { name: '__Reload time:__', value: `1.5 seconds from start to finish`, inline: true },
        { name: '__Aim type:__', value: `Unscoped: Projectile\nScoped: Hitscan`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/76/Ana.png/revision/latest/scale-to-width-down/143?cb=20160715094551"
  			)
        interaction.reply({ embeds: [anaEmbed]});
      break;
      case 'ability_ana':
        const abilityAnaEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("You're powered up, get in there.")
  			.addFields(
        { name: '__Sleep Dart:__', value: `Damage: 5\nDuration: 1.5-5 seconds\nCooldown: 14 seconds`, inline: true },
        { name: '__Biotic Grenade:__', value: `Damage: 60\nHealing: 100\nDuration: 4 seconds\nCooldown: 10 seconds`, inline: true },
        { name: '__Nano Boost:__', value: `Damage: 50% increase\nHealing: 250\nDamage reduction: 50%\nDuration: 8 seconds\nUltimate cost: 2100 points`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/76/Ana.png/revision/latest/scale-to-width-down/143?cb=20160715094551"
  			)
        interaction.reply({ embeds: [abilityAnaEmbed]});
      break;
      case 'hero_baptiste':
        const baptisteEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("Another day, another battlefield")
  			.addFields(
		{ name: '__Health:__', value: `200 health points`, inline: true },
        { name: '__Damage/healing:__', value: `Primary: 7.2-25 damage per round\nSecondary: 70 (direct hit) or 50 (explosion)`, inline: true },
        { name: '__Rate of Fire of Primary/Secondary:__', value: `Primary: 1 burst every 0.588 seconds\nSecondary: 1 shot every 0.9 seconds`, inline: true },
        { name: '__Ammo:__', value: `Primary: 45\nSecondary: 13`, inline: true },
        { name: '__Reload time:__', value: `1.5 seconds from start to finish with primary and secondary`, inline: true },
        { name: '__Aim type:__', value: `Primary: Hitscan\nSecondary: Arching Area of Affect`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/01/Baptiste-portrait.png/revision/latest/scale-to-width-down/162?cb=20190227081553"
  			)
        interaction.reply({ embeds: [baptisteEmbed]});
      break;
      case 'ability_baptiste':
        const abilityBaptisteEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("Light them up!")
  			.addFields(
        { name: '__Regenerative Bust:__', value: `Healing: 50HP over 5 seconds plus initial 50-100 HP\nArea of Effect: 10 meter radius\nCooldown: 15 seconds`, inline: true },
        { name: '__Immortality Field:__', value: `Durability of Ability: 150 HP\nArea of Effect: 6.5 meters radius\nDuration: 5 seconds\nCooldown: 25 seconds`, inline: true },
        { name: '__Amplification Matrix:__', value: `Damage: 100% increase\nHealing: 100% increase\nMax Range: 35 meters\nDuration: 10 seconds\nUltimate cost: 2310 points`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/01/Baptiste-portrait.png/revision/latest/scale-to-width-down/162?cb=20190227081553"
  			)
        interaction.reply({ embeds: [abilityBaptisteEmbed]});
      break;
      case 'hero_brigitte':
        const brigitteEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("Breaking me down just builds me up.")
  			.addFields(
		{ name: '__Health/armor:__', value: `Health: 150\nArmor: 50`, inline: true },
        { name: '__Damage/healing:__', value: `Damage: 35 per swing\nHealing: 15 HP per second`, inline: true },
        { name: '__Rate of Fire:__', value: `1 swing per 0.6 seconds`, inline: true },
        { name: '__Max Range:__', value: `6 meters`, inline: true },
        { name: '__Duration of Heals:__', value: `5 seconds `, inline: true },
        { name: '__Aim type:__', value: `Melee`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8a/Brigitte_Concept.png/revision/latest/scale-to-width-down/255?cb=20180228195511"
  			)
        interaction.reply({ embeds: [brigitteEmbed]});
      break;
      case 'ability_brigitte':
        const abilityBrigitteEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("Rally to me!")
  			.addFields(
        { name: '__Repair Pack:__', value: `Healing: 110HP over 2 seconds\nAmmo: 3\nDuration: 2 seconds\nCooldown: 6 seconds per charge`, inline: true },
        { name: '__Whip Shot:__', value: `Damage: 70\nArea of Effect: 0.5 meters radius\nMax range: 20 meters\nCooldown: 4 seconds`, inline: true },
        { name: '__Rally:__', value: `Healing: 15 overhealth per 0.5 seconds\nArea of Effect: 8.5 meters radius\nDuration: 10 seconds \nUltimate cost: 2800 points`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8a/Brigitte_Concept.png/revision/latest/scale-to-width-down/255?cb=20180228195511"
  			)
        interaction.reply({ embeds: [abilityBrigitteEmbed]});
      break;
	  case 'hero_kiriko':
        const kirikoEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("I'll find my own path.")
  			.addFields(
		{ name: '__Health:__', value: `Health: 200`, inline: true },
        { name: '__Damage/healing:__', value: `Damage: 40 per Kunai\nHealing: 13 per tailsman or 26 per pair`, inline: true },
        { name: '__Headshot:__', value: `Kunai headshots do 120 damage`, inline: true },
        { name: '__Ammo:__', value: `10 shots for Healing Ofunda and 15 for Kunai`, inline: true },
        { name: '__Healing per second:__', value: `78 HP `, inline: true },
        { name: '__Aim type:__', value: `Projectile`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d4/Kiriko-portrait.png/revision/latest/scale-to-width-down/293?cb=20221114213127"
  			)
        interaction.reply({ embeds: [kirikoEmbed]});
      break;
      case 'ability_kiriko':
        const abilityKirikoEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("Let the Kitsune guide you!")
  			.addFields(
        { name: '__Swift Step:__', value: `Max range: 35 meters\nDuration: 0.25 seconds of invincibilty\nCooldown: 7 seconds`, inline: true },
        { name: '__Protection Suzu:__', value: `Durability of Ability: 0.85\nArea of Effect: 6.5 meters radius\nDuration: 5 seconds\nCooldown: 25 seconds`, inline: true },
        { name: '__Kitsune Rush:__', value: `Damage: 100% increase\nHealing: 100% increase\nMax Range: 35 meters\nDuration: 10 seconds \nUltimate cost: 2800 points`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d4/Kiriko-portrait.png/revision/latest/scale-to-width-down/293?cb=20221114213127"
  			)
        interaction.reply({ embeds: [abilityKirikoEmbed]});
      break;
      case 'ability_mercy':
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
      case 'ability_moira':
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
      case 'ability_zenyatta':
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