const Command = require('../../struct/Command')
const { RichEmbed } = require('discord.js')
const { INV } = require('../../packages/color')
const { owner } = require('../../packages/perms')

class EvalCommand extends Command {
    constructor() {
        super({
            name: 'eval',
            aliases: ['e'],
            category: 'Owner'
        })
    } 


    run({message, args}) {
        if (message.author.id !== '569328425186230283' && message.author.id !== '569328425186230283') {
            let owner = new RichEmbed()
            .setDescription(owner)
            .setColor(INV)
    
            message.channel.send(owner)
            return;
        }
        if (message.content.includes("token")) return message.reply("VOC脢 TEM PROBLEMA? **CARAIO**");
        try {
            let nylindao = args.join(" ");
            let nytotoso = eval(nylindao);
    
            if (typeof nytotoso !== 'string')
                nytotoso = require('util').inspect(nytotoso, { depth: 0 });
            let embed = new RichEmbed()
            .setAuthor('Eval')
            .setColor([54, 57, 63])
            .addField('Entrada 馃摜', `\`\`\`js\n${nylindao}\n\`\`\``)
            .addField('Saida 馃摛',  `\`\`\`js\n${nytotoso}\n\`\`\``)
            .setFooter(" Shina 漏 | Copia n茫o carai.", this.client.user.displayAvatarURL)
            .setTimestamp();
    
      message.channel.send(embed)
        } catch(e) {
            message.channel.send(e);
        }
    }
    
} 
module.exports = EvalCommand
