const { MessageEmbed } = require("discord.js");
const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "help",
  aliases: ["h"],
  description: ("clip,clips,help,invite,loop,lyrics,move,np,pause,ping,play,playlist,pruning,queue,remove,search,suffle,skip,skipto,stop,uptime,volume"),
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle(i18n.__mf("help.embedTitle", { botname: message.client.user.username }))
      .setDescription(i18n.__("clip,clips,help,invite,loop,lyrics,move,np,pause,ping,play,playlist,pruning,queue,remove,search,suffle,skip,skipto,stop,uptime,volume"))
      .setColor("#F8AA2A");

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
