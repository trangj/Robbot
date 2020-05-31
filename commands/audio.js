module.exports = {
  name: "audio",
  description: "Play an audio clip of Robert",
  args: true,
  usage: "<# from 0-6>",
  execute(message, args) {
    if (!message.member.voice.channel) {
      message.reply("you have to be in a voice channel to use this command.");
      return;
    }

    const audio = [
      "",
      "https://www.mboxdrive.com/last%20moments%20before%20jew%20was%20murdered%20by%20ss.mp3",
      "https://drive.google.com/file/d/1ZD0Ub8pt_0OULgy0qaaZrpjlR5EcVYRk/preview?usp=sharing",
    ];

    if (args[0] < audio.length) {
      message.member.voice.channel
        .join()
        .then((connection) => {
          const dispatcher = connection.play(audio[args[0]]);
          dispatcher.on("start", () => {
            console.log("audio has started");
          });
          dispatcher.on("finish", () => {
            console.log("audio has finished");
            connection.disconnect();
          });
          dispatcher.on("error", console.error);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      message.reply("pick an argument from 0-6.");
    }
  },
};
