module.exports = {
  name: "rob",
  description: "Post a cute picture of robert.",
  args: true,
  usage: "<# from 1-6>",
  execute(message, args) {
    if (args[0] == "1") {
      message.channel.send("https://imgur.com/rOdOza8");
    } else if (args[0] == "2") {
      message.channel.send("https://imgur.com/9RrVrtT");
    } else if (args[0] == "3") {
      message.channel.send("https://imgur.com/CvzuLIl");
    } else if (args[0] == "4") {
      message.channel.send("https://imgur.com/VCIGNSu");
    } else if (args[0] == "5") {
      message.channel.send("https://imgur.com/xvhEr7e");
    } else if (args[0] == "6") {
      message.channel.send("https://imgur.com/AUzF87h");
    } else if (args[0] == "7") {
      message.channel.send("https://imgur.com/WNwtb7Z");
    } else if (args[0] == "8") {
      message.channel.send("https://imgur.com/2diRh8e");
    } else if (args[0] == "9") {
      message.channel.send("https://imgur.com/MvSq0a2");
    } else if (args[0] == "10") {
      message.channel.send("https://imgur.com/aR2NxTy");
    } else if (args[0] == "11") {
      message.channel.send("https://imgur.com/cP7rUoy");
    } else if (args[0] == "12") {
      message.channel.send("https://imgur.com/Hv6KeMS");
    } else if (args[0] == "13") {
      message.channel.send("https://imgur.com/gZdFr3U");
    } else {
      message.reply("pick an argument from 1-13.");
    }
  },
};
