const Discord = require("discord.js");
const fs = require("fs");
const token = process.env.TOKEN || require("./config").token;
const prefix = process.env.PREFIX || require("./config").prefix;
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  if (command.args && !args.length) {
    return message.reply(
      `you need to provide additional arguments.\nTry: ${prefix}${command.name} ${command.usage}`
    );
  }

  try {
    command.execute(message, args);
  } catch (err) {
    console.log(err);
    message.reply(
      "that command doesn't exist or there was an error trying to execute it."
    );
  }
});

client.login(token);
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}
