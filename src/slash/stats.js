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
      case 'hero_lucio':
        const lucioEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("We're here to be heard!")
  			.addFields(
		{ name: '__Health:__', value: `Health: 200`, inline: true },
        { name: '__Damage/healing:__', value: `Damage: 40 per Kunai\nHealing: 13 per tailsman or 26 per pair`, inline: true },
        { name: '__Headshot:__', value: `Kunai headshots do 120 damage`, inline: true },
        { name: '__Ammo:__', value: `10 shots for Healing Ofunda and 15 for Kunai`, inline: true },
        { name: '__Healing per second:__', value: `78 HP `, inline: true },
        { name: '__Aim type:__', value: `Projectile`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8c/Lucio-portrait.png/revision/latest/scale-to-width-down/189?cb=20160620004212"
  			)
        interaction.reply({ embeds: [lucioEmbed]});
      break;
      case 'ability_lucio':
        const abilityLucioEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("Oh, let's break it down!")
  			.addFields(
        { name: '__Amp It Up:__', value: `Healing: 50 per second for allies\nDuration: 3 seconds\nMovement speed: +60%\nArea of Effect: 12 meters radius\nCooldown: 12 seconds`, inline: true },
        { name: '__Crossfade:__', value: `Healing: 16 per second for allies\nArea of Effect: 12 meters radius\nMovement speed: +25%\nCooldown: 0.38 seconds`, inline: true },
        { name: '__Sound Barrier:__', value: `Health: 750\nArea of Effect: 30 meter radius\nDuration: 6 seconds \nUltimate cost: 2600 points`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/8c/Lucio-portrait.png/revision/latest/scale-to-width-down/189?cb=20160620004212"
  			)
        interaction.reply({ embeds: [abilityLucioEmbed]});
      break;
      case 'hero_mercy':
        const mercyEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("Don't worry, I'll be right behind you.")
  			.addFields(
		{ name: '__Health:__', value: `Health: 200`, inline: true },
        { name: '__Damage buff/healing:__', value: `Damage: 30% damage boost\nHealing: 55 HP per seconds`, inline: true },
        { name: '__Damage:__', value: `20 damage per shot`, inline: true },
        { name: '__Ammo:__', value: `25 shots`, inline: true },
        { name: '__Reload time:__', value: `1.4 seconds or after 1.4 seconds of not having it equiped`, inline: true },
        { name: '__Aim type:__', value: `Projectile`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d2/Mercy-portrait.png/revision/latest/scale-to-width-down/350?cb=20160620024553"
  			)
        interaction.reply({ embeds: [mercyEmbed]});
      break;
      case 'ability_mercy':
        const abilityMercyEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("Heroes never die!")
  			.addFields(
        { name: '__Guardian Angel:__', value: `Movement speed: 17 meters per second\nDuration: as long as it takes to reach the ally\nMax range: 30 meters\nCooldown: 1.5 seconds`, inline: true },
        { name: '__Resurrect:__', value: `Movement speed: -75%\nHealing: Resurrect a fallen ally\nCasting time: 1.75 seconds\nCooldown: 30 seconds`, inline: true },
        { name: '__Valkyrie:__', value: `Healing: 60 per second for allies\nDamage: 30% chain-boost damage\nMovement speed: 9 meters per second\nDuration: 15 seconds \nUltimate cost: 1820 points`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d2/Mercy-portrait.png/revision/latest/scale-to-width-down/350?cb=20160620024553"
  			)
        interaction.reply({ embeds: [abilityMercyEmbed]});
      break;
      case 'hero_moira':
        const moiraEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("Humanity is shackled. I will find the key.")
  			.addFields(
		{ name: '__Health:__', value: `Health: 200`, inline: true },
        { name: '__Healing:__', value: `Healing: 70 HP per second`, inline: true },
        { name: '__Damage:__', value: `50 damage per second`, inline: true },
        { name: '__Ammo:__', value: `160 biotic energy`, inline: true },
        { name: '__Reload time:__', value: `42 seconds for all to be regenerated`, inline: true },
        { name: '__Aim type:__', value: `Beam`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b5/Moira.png/revision/latest/scale-to-width-down/162?cb=20171104021652"
  			)
        interaction.reply({ embeds: [moiraEmbed]});
      break;
      case 'ability_moira':
        const abilityMoiraEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("Surrender to my will!")
  			.addFields(
        { name: '__Biotic Orb:__', value: `Damage orb: 50 per second up to 200 total\nHealing: 65 per second up to 300\nDuration: 7 seconds or until depleted\nCooldown: 8 seconds`, inline: true },
        { name: '__Fade:__', value: `Movement speed: +250%\nMax range: 15 meters\nDuration: 0.752\nCooldown: 6 seconds`, inline: true },
        { name: '__Coalescence:__', value: `Healing: 140 per second for allies\nDamage: 70 per second\nMovement speed: +50%\nDuration: 8 seconds \nUltimate cost: 2800 points`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b5/Moira.png/revision/latest/scale-to-width-down/162?cb=20171104021652"
  			)
        interaction.reply({ embeds: [abilityMoiraEmbed]});
      break;
	  case 'hero_zenyatta':
        const zenyattaEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("Amid discord, we will find tranquility.")
  			.addFields(
		{ name: '__Health:__', value: `Health: 50\nShield: 150`, inline: true },
        { name: '__Healing:__', value: `Healing: 30 HP per second`, inline: true },
        { name: '__Damage:__', value: `48 damage per orb`, inline: true },
        { name: '__Ammo:__', value: `20`, inline: true },
        { name: '__Reload time:__', value: `1.5 seconds`, inline: true },
        { name: '__Aim type:__', value: `Projectile`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/92/Zenyatta-portrait.png/revision/latest/scale-to-width-down/269?cb=20160620015935"
  			)
        interaction.reply({ embeds: [zenyattaEmbed]});
      break;
      case 'ability_zenyatta':
        const abilityZenyattaEmbed = new EmbedBuilder()
  			.setColor("#4a4c4e")
  			.setTitle("Experience tranquility.")
  			.addFields(
        { name: '__Orb of Harmony:__', value: `Healing: 30 per second\nMax range: 40 meters\nDuration: 3 seconds if out of sight otherwise infinite\nCooldown: no cooldown`, inline: true },
        { name: '__Orb of Discord:__', value: `Damage: +25% damage recieved\nMax range: 40 meters\nDuration: 2 seconds if out of sight otherwise infinite\nCooldown: No cooldown`, inline: true },
        { name: '__Transcendence:__', value: `Healing: 300 per second\nMovement speed: 11 meters per second\nDuration: 6 seconds \nUltimate cost: 2310 points`, inline: true },
            )
  			.setThumbnail(
  				"https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/92/Zenyatta-portrait.png/revision/latest/scale-to-width-down/269?cb=20160620015935"
  			)
        interaction.reply({ embeds: [abilityZenyattaEmbed]});
      break;
      default:
        interaction.reply('That is not a support character.');
}
		
	},
};