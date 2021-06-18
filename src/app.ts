import Discord, { Message } from "discord.js";
import { audio, help, rob } from "./commands";

// constants
const token = process.env.TOKEN;
const prefix = "!";

const client = new Discord.Client();
client.once("ready", () => {
	console.log("Ready!");
});

// initializing the bot
client.login(token);
client.commands = new Discord.Collection();
client.commands.set(audio.name, audio);
client.commands.set(help.name, help);
client.commands.set(rob.name, rob);

// message listener
client.on("message", (message: Message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return null;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	// the command does not exist
	if (!client.commands.has(commandName)) {
		return message.reply(
			`are you literally brainwater? What is ${commandName}?`
		);
	}

	// get the commmand from the collection
	const command = client.commands.get(commandName);

	// if the command requires arguments and none are provided throw error
	if (command.args && !args.length) {
		return message.reply(
			`you need to provide additional arguments.\nTry: ${prefix}${command.name} ${command.usage}`
		);
	}

	// execute the command
	try {
		command.execute(message, args);
	} catch (err) {
		return message.reply(
			"that command doesn't exist or there was an error trying to execute it."
		);
	}

	return null;
});
