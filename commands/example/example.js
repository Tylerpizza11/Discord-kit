
const { IntentsBitField, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, Client, Collection, GatewayIntentBits, Activity, ActivityType } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('exapmle')
		.setDescription('Example')
		.addStringOption(option =>
			option
				.setName('Example')
				.setDescription('Example')
				.setRequired(true))
				.addStringOption(option =>
					option
						.setName('Example')
						.setDescription('Example')
						.setRequired(true))
						.addStringOption(option =>
							option
								.setName('Example')
								.setDescription('Example')
								.setRequired(true)),
	async execute(interaction) {},
};
