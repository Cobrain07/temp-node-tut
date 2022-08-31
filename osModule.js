const os = require ('os')

//infouser
const user = os.userInfo()
console.log (user)

//uptime in seconds
console.log(`the system uptime is ${os.uptime} seconds`)
 
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem(),
}
console.log(currentOs)