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
    } else {
      message.reply("pick an argument from 1-6.");
    }
  },
};
