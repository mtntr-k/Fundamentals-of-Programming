// Випадкові символи
"use strict";

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

const generateKey = (length, character) => {
    let result = "";
    
    for(let i = 1; i <= length; i++){
        const randomNum = Math.random();
        result += character[Math.floor(randomNum * character.length)];
    }

    return result;
}

const key = generateKey(16, characters);
console.log(key);