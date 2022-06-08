class Person{
    constructor(network){
        this.messages = []
        this.network = network
        this.network.subscribe(this)
    }
    shout(message){
        this.network.broadcast(message)
    }
    hear(message){
        message = this.message
        this.message.push(message)
    }
    messageHeard(message){
        return [message]
    }
}

class Network{
    constructor(range) {
        this.listeners = []
        this.range = range        
    }
    subscribe(person){
        this.listeners.push(person)
    }
    broadcast(message){
        this.listeners.forEach(listener => {
            if(Math.abs(listener.location - shouter.location) <= this.range)
            listener.hear(message)
        })
    }
}
// location, location
module.exports = {Person: Person, Network: Network}
