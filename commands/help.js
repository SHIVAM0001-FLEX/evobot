const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: ("24/7,join,disconnect,clip,clips,help,invite,loop,lyrics,move,np,pause,ping,play,playlist,pruning,queue,remove,search,suffle,skip,skipto,stop,uptime,volume"),
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("help.embedTitle", { botname: message.client.user.username })
      .setDescription("clip,clips,help,invite,loop,lyrics,move,np,pause,ping,play,playlist,pruning,queue,remove,search,suffle,skip,skipto,stop,uptime,volume")
      .setColor("EMBED_COLOR");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
