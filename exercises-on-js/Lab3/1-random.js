// Випадкове число
"use strict";

const random = (min, max) => {
    const randomNum = Math.random();
    let res;

    if(max === undefined) {
        return res = Math.floor(randomNum * min);
    }
    
    return res = Math.floor(randomNum * (max - min + 1) + min);
}

console.log("Random number:", random(3)); // Random number: (від 0 до 3)
console.log("Random number:", random(3,6)); // Random number: (від 3 до 6)