import { Message } from "discord.js";

export const rob = {
	name: "rob",
	description: "Post a cute picture of Robert.",
	args: true,
	usage: "<# from 1-13>",
	execute(message: Message, args: string[]) {
		const links = [
			"",
			"https://imgur.com/rOdOza8",
			"https://imgur.com/9RrVrtT",
			"https://imgur.com/CvzuLIl",
			"https://imgur.com/VCIGNSu",
			"https://imgur.com/xvhEr7e",
			"https://imgur.com/AUzF87h",
			"https://imgur.com/WNwtb7Z",
			"https://imgur.com/2diRh8e",
			"https://imgur.com/MvSq0a2",
			"https://imgur.com/aR2NxTy",
			"https://imgur.com/cP7rUoy",
			"https://imgur.com/Hv6KeMS",
			"https://imgur.com/gZdFr3U",
		];
		if (parseInt(args[0]) > 0 && parseInt(args[0]) < 14) {
			message.channel.send(links[parseInt(args[0])]);
		} else {
			message.reply("pick a number between 1-13");
		}
	},
};
