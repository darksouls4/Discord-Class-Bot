class Event {
    constructor(eventName) {
        if(!eventName) throw new Error("Não encontrei o evento!")
        this.eventName = eventName;
    }

    register(client) {
        this.client = client

        client.on(this.eventName, (...args) => { this.run(...args ) });
    }
}

module.exports = Event
