const ytdl = require("ytdl-core");

module.exports = {
  name: "audio",
  description: "Play an audio from YouTube",
  args: true,
  usage: "<YouTube URL>",
  execute(message, args) {
    if (args[0]) {
      ytdl.getInfo(args[0]).then((song) => {
        message.member.voice.channel.join().then((connection) => {
          const dispatcher = connection.play(ytdl(song.video_url));
          dispatcher.setVolume(0.5);
          dispatcher.on("start", () => {
            console.log("audio has started");
          });
          dispatcher.on("finish", () => {
            console.log("audio has finished");
            connection.disconnect();
          });
          dispatcher.on("error", console.error);
        });
      });
    } else {
      message.reply("you need to provide a Youtube link.");
    }
  },
};
