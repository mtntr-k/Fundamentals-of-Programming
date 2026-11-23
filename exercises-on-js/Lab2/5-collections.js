// Колекції
"use strict";

// Зберігання телефонних номерів у масиві об'єктів
const phoneBook = [
    { name: "Barbara", phone: "+380 67 123 45 67" },
    { name: "Jason", phone: "+380 50 987 65 43" },
    { name: "Clark", phone: "+380 93 555 00 00" },
];

const findPhoneByName = (name) => {
    for (let item of phoneBook) {
        if (name === item.name) {
            return item.phone;
        }
    }
}

console.log("Phone:", findPhoneByName("Jason")); // Phone: +380 50 987 65 43

// Зберігання телефонних номерів на хеш-таблицях
const hash = {
    Barbara: "+380 67 123 45 67",
    Jason: "+380 50 987 65 43",
    Clark: "+380 93 555 00 00",
}

const findPhoneByNameInHash = (name) => hash[name];

console.log("Phone:", findPhoneByNameInHash("Clark")); // Phone: +380 93 555 00 00