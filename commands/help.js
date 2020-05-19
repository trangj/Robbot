const config = require("../config");

module.exports = {
  name: "help",
  description: "List all avaliable commands",
  usage: "<command name>",
  execute(message, args) {
    let data = [];
    const commands = message.client.commands;
    data.push("here is a list of avaliable commands:");
    data.push(commands.map((command) => command.name).join(", "));
    return message.reply(data);
  },
};
