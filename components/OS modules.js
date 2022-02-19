const { log } = require("console");
const os=require("os");
console.log( os.arch());  // check artitechure
// console.log( os.freemem());  // check artitechure
const freeMemory=os.freemem();
const totalMemory=os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);
console.log(os.hostname()); 
console.log(os.platform());
console.log(os.tmpdir()); 
console.log(os.type()); //operating system name
console.log(os.version());
console.log(os.userInfo());
console.log(os.uptime());
console.log(os.release()); 
console.log(os.networkInterfaces()); // provide mac address,ip address,network mask,family of os,
console.log(os.loadavg()); //loading time
console.log(os.EOL); // provide just end of line
console.log(os.endianness())   // provide little or big endian format
console.log(os.cpus());   //provide cpu code of the computer
console.log(os.constants);
