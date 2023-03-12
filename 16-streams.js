const {createReadStream, createWriteStream} = require('fs')

const readStream = createReadStream('./content/big.txt')

const writeStream = createWriteStream('./content/writeBigFile.txt')

readStream.on('data', (chunk) => {
    console.log('new chunk received')
    writeStream.write(chunk)
})

readStream.on('error',(err) => {console.log(err)}
