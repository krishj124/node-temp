//os modules

const os = require("os");

// info about current user

const user = os.userInfo();
console.log(user);

// system uptime

console.log(`The system run time is ${os.uptime} Seconds`);

//type ,release,totalmem,freemem {os modules}

const osCurrent = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(osCurrent);
