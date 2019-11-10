const Command = require("../../struct/Command")
const { RichEmbed } = require('discord.js')
const { P } = require('../../packages/color')
 

class Tag extends Command {
    constructor() {
        super({
            name: 'tag',
            aliases: ['tg'],
            category: 'User'
        })
    }


    run({message}) {

        let roles = member.roles.map((role) => roles.name)

        let test = new RichEmbed()
        .setTitle('Aqui está todas as tags que você tem!')
        .setDescription(roles)
        .setColor(P)
        message.channel.send(test)

    }
}
module.exports = TagTagCommand.ks
