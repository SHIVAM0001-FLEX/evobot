const distube = require('../index.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "join",
    aliases: ["j", "247", "24/7", "24x7","aaja","aja"],
    description: "Join your VC for 27/7",
    async execute(message, args) {
        const { channel } = message.member.voice;

        const novc = new MessageEmbed()
        .setDescription(`You need to join a voice channel first!`)
        .setColor("YELLOW");

        const joinn = new MessageEmbed()
        .setDescription(":sez_music_correct: 24/7 mode is now **Enabled** in this server.")
        .setColor("YELLOW");

        const serverQueue = message.client.queue.get(message.guild.id);
        if (!channel) return message.channel.send(novc).catch(console.error);
        const nosamechannel = new MessageEmbed()
        .setDescription(` You must be in the same channel as ${message.client.user}`)
        .setColor("YELLOW");
        message.channel.send(joinn)
        

        if (serverQueue && channel !== message.guild.me.voice.channel)
          return message.channel.send(nosamechannel).catch(console.error);          

            await message.member.voice.channel.join()
  
        }
    }


    console.log("Join working")
