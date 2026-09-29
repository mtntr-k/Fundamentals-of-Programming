// Підрахунок елементів різних типів у масиві
"use strict";

const arr = [1943, "Batman", true, "Dark Knight Trilogy", false, 2005, 2008, 2012, "Batman", 2022, true, "Joker", false, 2019, "Robert Pattison", 2028];

// Другий спосіб, де в об'єкт-колекцію types2 ключі додаються динамічно
let types2 = {};

for (let item of arr) {
    let itemType = typeof item;

    if (types2[itemType] === undefined) {
        types2[itemType] = 1;
    } else {
        types2[itemType] += 1;
    }
}
console.log(types2); // {number: 7, string: 5, boolean: 4}
