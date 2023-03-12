const http = require('http')

//Using event emitter API
const server = http.createServer()
//Emit request event
//subscribe for it, listen to it, respond to it
server.on('request', (req, res) =>{
    res.end('Welcome')
})

server.listen(5000)