const EventEmitter = require('events')

const customerEmitter = new EventEmitter()

customerEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id: ${id}`)
}) 

customerEmitter.on('response', () => {
    console.log('some other logic here')
}) 

customerEmitter.emit('response', 'john', 25)