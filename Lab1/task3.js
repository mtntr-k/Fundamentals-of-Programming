// Підрахунок елементів різних типів у масиві
"use strict";

const arr = [1943, "Batman", true, "Dark Knight Trilogy", false, 2005, 2008, 2012, "Batman", 2022, true, "Joker", false, 2019, "Robert Pattison", 2028];

// Перший спосіб, де об'єкт-колекція types1 має ключі
let types1 = {
    number: 0,
    string: 0,
    boolean: 0,
};

for(let item of arr) {
    let itemType = typeof item;

    if(itemType === "number") {
        types1.number += 1;
    }

    if(itemType === "string") {
        types1.string += 1;
    }

    if(itemType === "boolean") {
        types1.boolean += 1;
    }
}
console.log(types1); // {number: 7, string: 5, boolean: 4}