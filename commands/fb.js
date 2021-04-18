const {MessageEmbed} = require('discord.js')
module.exports = {
    name: "feedback",
    aliases: ["fb"],
    cooldown: 3,
    description: "submit a feedback",
    async execute(message, args) {

        const fbChannel = "826342980960256031";

        const fb = args.join(" ");
        if(!fb){
            return message.channel.send("Please enter a feedback!");
        }

        const embed = new MessageEmbed()
            .setTitle("Astroz Music Feedback :astroz_correct:")
            .addField(`Author`, `\`${message.author.tag}\``)
            .addField(`Feedback`, "\`"+fb+"\`")
            .addField(`Member Id`, `\`${message.author.id}\``)
            .addField(`On the Server`, `\`${message.guild.name}\``)
            .addField("Server ID:", `\`${message.guild.id}\``)
            .setColor("YELLOW")
            .setTimestamp()
                    
        message.client.channels.cache.get(fbChannel).send(embed).then((msg) =>{
        }).catch((err)=>{
            throw err;
        });


        const successembed = new MessageEmbed()
        .addField("Join Our Support Server", `Click Here To Join Our [Support Server](https://discord.gg/m7W2t3bsZj)`)
        .setTitle("Success!")
        .setColor("YELLOW")
        .setDescription(` Your **Feedback** is submitted successfully!`)

        message.author.send(successembed)
    }

}


console.log("Feedback cmd working")
