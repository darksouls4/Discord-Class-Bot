const Event = require('../struct/Event')
const chalk = require('chalk')

class ReadyEvent extends Event {
    constructor() {
        super("ready")
    }

    run() {
        console.log(chalk.greenBright('[INICIADO]'))
    }
}

module.exports = ReadyEvent
