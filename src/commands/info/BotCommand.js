const Command = require('../../struct/Command')
const { RichEmbed } = require('discord.js')
const { BA } = require('../../packages/color')

class BotCommand extends Command {
    constructor() {
        super({
            name: 'bot',
            aliases: ['bt'],
            category: 'Info'
        })
    }

    run({message, args}) {
        if (args[0] == 'v2') {
            let e = new RichEmbed()
            .setDescription('Não tenho ainda baby')
            .setColor(BA)
            message.channel.send(e)
            return;
        }

        let eE = new RichEmbed()
        .setDescription('Sou feito usando classes!')
        .setColor(BA)
        message.channel.send(eE)
    }
}

module.exports = BotCommand
