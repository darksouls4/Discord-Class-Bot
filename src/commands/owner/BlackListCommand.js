const Command = require('../../struct/Command')
const { owner } = require('../../packages/perms')
const { P } = require('../../packages/color')

//const db = require('quick.db')

class BlackList extends Command {
    constructor() {
        super({
            name: 'blacklist',
            aliases: ['bl'],
            category: 'Owner'
        })
    }

    async run({message, args}) {
        if(message.author.id !== '569328425186230283') {
            let ownerE = new RichEmbed()
            .setDescription(owner)
            .setColor(P)
    
            message.channel.send(ownerE)
            return;
        }
    
    
    
        if(!args[0]) {
            let args = new RichEmbed()
            .setDescription('Para usar este comando tem 2 jeitos, ```k>blacklist add @membro``` aí adiciona o membro na blacklist e ```k>blacklist remove @member``` para tirar um membro da blacklist!\n:D')
            .setColor('BLACK')
    
            message.channel.send(args)
        }
    
    
        if(args[0] == 'info') {
            let info = new RichEmbed()
        .setTitle("**__USUÁRIOS BANIDOS__**") 
            .setDescription('Não tenho nenhum usuário banido no meu sistema!')//Não tenho nenhum usuário banido do meu sistema!
            .setColor('BLACK')
    
            message.channel.send(info)
            return;
        }
    
    
        if(args[0] == 'remove') {
            let user = message.mentions.users.first();
    
            const blacklist = await db.fetch(`blacklist`)
            const array = blacklist.split("_")
            db.set(`blacklist`, array.filter(c => !c == user.id).map(c => c).join('_'))
    
            let BR = new RichEmbed()
            .setDescription(`O membro ${user} foi retirado da blacklist com sucesso!`)
            .setColor('BLACK')
    
            message.channel.send(BR)
    
        }
    
        if(args[0] == 'add') {
            let user = message.mentions.users.first();
            let motivo = message.content.split(" ").slice(2).join(" ");
    
    
            if(!user) {
                let userE = new RichEmbed()
                .setDescription('Me fale quem é pra ser banido.')
                .setColor('BLACK')
    
                message.channel.send(userE)
                return;
            }
    
    
            if(!motivo) {
                let motivoE = new RichEmbed()
                .setDescription('Você não me informou o motivo do banimento do sistema!')
                .setColor('BLACK')
    
                message.channel.send(motivoE)
                return;
            }
    
    
    
            let blacklist = await db.fetch(`blacklist`)
            if (blacklist == null) {
            db.set(`blacklist`, user.id)
             } else {
            blacklist = blacklist.split("_")
            if (blacklist.includes(user.id)) {
                let black = new RichEmbed()
                .setColor("BLACK")
                .setDescription('Esse usuário já está na blacklist')
    
                message.channel.send(black)
                return;
            }
            else db.set(`blacklist`, `${await db.fetch(`blacklist`)}_${user.id}`)
    
    
    
            let TROUXA = new RichEmbed()
            .setDescription('Infelizmente você está permanentemente banido do meu sistema, caso queria revogar seu banimento fale com o' + ` <@569328425186230283>` + ' obrigado!')
            .addField('Banido pelo motivo', `${motivo}`)
            .addField('Qualquer coisa passe no servidor de suporte para mais informações!', `COLOCAR O SERVIDOR!`)
            .setColor('BLACK')
            user.send(TROUXA)
    
    
            let banidoPORRA = new RichEmbed()
            .setDescription(`O membro ${user} está banido permanentemente do meu sistema!`)
            .setColor('BLACK')
            message.channel.send(banidoPORRA)
            return;
    
    
    
        }
    
        }
    
    }
    
    
}
module.exports = BlackList
