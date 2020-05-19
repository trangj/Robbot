module.exports = {
  name: "audio",
  description: "Play an audio clip of Robert",
  args: true,
  usage: "<# from 1-6>",
  execute(message, args) {
    if (!message.member.voice.channel) return;
    message.member.voice.channel
      .join()
      .then((connection) => {
        if (args[0] == "1") {
          const dispatcher = connection.play(
            "https://www.mboxdrive.com/last%20moments%20before%20jew%20was%20murdered%20by%20ss.mp3"
          );
          dispatcher.on("start", () => {
            console.log("audio.mp3 is now playing!");
          });
          dispatcher.on("finish", () => {
            console.log("audio.mp3 has finished playing!");
            connection.disconnect();
          });
          dispatcher.on("error", console.error);
        } else {
          message.reply("pick an argument from 1-6.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
