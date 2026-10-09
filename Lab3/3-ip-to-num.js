// IP-адреса у число через методи і побітовий зсув
"use strict";

const ipToNum = (ip = "127.0.0.1") => {
   const num = ip
        .split(".")
        .map(Number)
        .reduce((acc, value) => {
            return (acc << 8) + value;
        });
    
   return num;
}

console.log(ipToNum()); // 2130706433
console.log(ipToNum("10.0.0.1 ")); // 167772161
console.log(ipToNum("192.168.1.10")); // -1062731510
console.log(ipToNum("165.225.133.150")); // -1511946858
console.log(ipToNum("0.0.0.0")); // 0
console.log(ipToNum("8.8.8.8")); // 134744072
