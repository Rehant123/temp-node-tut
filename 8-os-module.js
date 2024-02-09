import os from 'os';

console.log(os.userInfo());

const currentos = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};
console.log(`The system time is ${os.uptime()} seconds`);
console.log(currentos);
