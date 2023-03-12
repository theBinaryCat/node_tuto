const http = require('http')
const {createReadStream} = require('fs')

const server = http.createServer((req, res) => {

    const readStream = createReadStream('./content/big.txt','utf8')
    readStream.on('open', () => {
        readStream.pipe(res)
    })

    readStream.on('error',err => {res.end(err)})

})

server.listen(5000)

