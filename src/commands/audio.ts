import { Message, StreamDispatcher, VoiceConnection } from "discord.js";
import ytdl from "ytdl-core";

let dispatcher: StreamDispatcher;
let connection: VoiceConnection;
let queue: string[] = [];

export const audio = {
	name: "audio",
	description: "Play audio from YouTube",
	args: true,
	usage: "play <YouTube URL>, stop, pause, resume, queue <YouTube URL>, skip",
	execute(message: Message, args: string[]) {
		switch (args[0]) {
			case "play":
				play(message, args[1]);
				break;
			case "stop":
				stop(message);
				break;
			case "pause":
				dispatcher.pause();
				message.reply("paused audio playback.");
				break;
			case "resume":
				dispatcher.resume();
				message.reply("resumed audio playback.");
				break;
			case "queue":
				if (!args[1]) { message.reply("you are missing a YouTube link to play."); break; }
				queue.push(args[1]);
				message.reply(`added your link to queue.`);
				break;
			case "skip":
				if (!queue.length) { message.reply("there are no more items in queue"); break; };
				play(message, queue.shift());
				break;
			case "list":
				message.reply(`these are the links in queue: ${queue.join(', ')}`);
				break;
			default:
				break;
		}
	},
};

async function play(message: Message, url: string) {
	const channel = message.member.voice.channel;
	try {
		if (!url) throw Error("you are missing youtube link to play!");
		connection = await channel.join();
		dispatcher = connection
			.play(ytdl(url, { filter: "audioonly" }), { volume: 0.5 })
			.on("finish", () => {
				if (queue.length) {
					play(message, queue.shift());
				} else {
					connection.disconnect();
				}
			});
	} catch (err) {
		message.reply(err.message);
	}
}

async function stop(message: Message) {
	const channel = message.member.voice.channel;
	channel.leave();
	message.reply("audio play back stopped. Leaving channel...");
}
