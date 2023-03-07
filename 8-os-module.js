
const os = require('os')
// info about current user
console.log(os.userInfo())
//function returns the system uptime in seconds
console.log(`this system uptime is ${os.uptime()} seconds`)
//current OS info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS)