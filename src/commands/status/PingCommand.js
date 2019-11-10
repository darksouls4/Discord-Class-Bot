const Command = require('../../struct/Command');
const { RichEmbed } = require('discord.js')

class PingCommand extends Command {
    constructor() {
        super({
            name: 'ping',
            aliases: ['p']
        }) 
    }

  async run({message}) {
        let data_atual = Date.now();
    let heartbeat = (data_atual - message.createdTimestamp);

    const m = await message.channel.send("Calculando...");
    let latency = Math.round(m.createdTimestamp - message.createdTimestamp);

    let api_latency = Math.round(this.client.ping);

    let msg = ":ping_pong: Pong!";
    msg += "\nLatency » `" + latency + "ms`";
    msg += "\nHeartbeat » `" + heartbeat + "ms`";
    msg += "\nAPI Latency » `" + api_latency + "ms`";
    let e = new RichEmbed()
    .setDescription(msg)
    .setColor([54, 57, 63]);

    m.edit(e);
    }
}

module.exports = PingCommand
