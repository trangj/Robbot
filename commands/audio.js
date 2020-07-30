const ytdl = require("ytdl-core");

module.exports = {
  name: "audio",
  description: "Play an audio from YouTube",
  args: true,
  usage: "<play> <YouTube URL> or <stop>",
  execute(message, args) {
    const channel = message.member.voice.channel
    if (args[0] == "play") {
      play(channel, args[1])
    } else if (args[0] == "stop") {
      stop(channel)
    }
  },
};

async function play(channel, url) {
  const song = await ytdl.getInfo(url);
  try{
    const connection = await channel.join()
    const dispatcher = connection.play(ytdl(song.video_url))
      .on("finish", () => {
        connection.disconnect()
    })
  } catch (err) {
    console.error(err)
  }
}

async function stop(channel) {
  channel.leave()
}
