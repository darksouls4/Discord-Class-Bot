const Command = require('../../struct/Command')
const { RichEmbed } = require('discord.js')
const { INV } = require('../../packages/color')
 
class Avatar extends Command {
    constructor() {
        super({
            name: 'avatar',
            aliases: ['avt'],
            category: 'Info'
        })
    }

    run({message, args}) {
        const mention = message.mentions.members.first()
        let Member = mention? mention: message.guild.members.get(args[0])
        if (!Member) Member = message.member
        const embed = new Discord.RichEmbed()
            .setColor(INV)
            .setImage(Member.user.displayAvatarURL)
        
        if (!args[0]) return message.channel.send(embed.setTitle(message.author.tag))
    
        message.channel.send(embed.setTitle(Member.user.tag))
    }
    
}
module.exports = Avatar
