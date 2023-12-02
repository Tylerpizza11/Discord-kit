const dev = 0
const fs = require('node:fs');
const path = require('node:path');
const { IntentsBitField, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle, Client, Collection, GatewayIntentBits, Activity, ActivityType } = require('discord.js');
const { token } = require('./config.json');
const { type } = require('node:os');
const { log, clear } = require('node:console');
const { url } = require('node:inspector');
const cli = require('nodemon/lib/cli');
const readline = require('readline').createInterface({
	input: process.stdin,
	
  });
  

const client = new Client({ intents: [GatewayIntentBits.Guilds,
	] });

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
//don't touch




//don't touch
let y = process.openStdin()
y.addListener("data", res =>{
    let x = res.toString().trim().split(/ +/g)
		if (x.join(" ") == "restart") {
		console.log("Restarting...");
		setTimeout(() => {  client.login(token);  }, 6000);
		client.destroy()
		setTimeout(() => {  console.log("Restarted!");  }, 6000);
	}
	if (x.join(" ") == "dev on") {
		console.log("dev is now on!");
		client.user.setActivity({
			name: "Dev Mode Active!",
			type: ActivityType.Listening,
	})} if (x.join(" ") == "dev off") {
		console.log("dev is now off!");
		client.user.setActivity({
			name: "Status here",
			type: ActivityType.Watching
		})
	} if (x.join(" ") == "clear") {
		clear()
		console.log(`Ready! Logged in as ${client.user.tag}`);
	}
});



client.on('ready', (c) => {
	client.user.setActivity({
			name: "Status here",
			type: ActivityType.Watching
		})
})
client.login(token); 