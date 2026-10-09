// Об'єкти
"use strict";

// Вправи над об'єктами
const person = { name: "Bruce" };
let kid = { name: "Richard" };

// const робить константою лише сам об'єкт, поля якого можна вільно змінювати
person.name = "Batman";
kid.name = "Robin";
// person = kid; - Викличе помилку, const не можна присвоїти посилання на інший об'єкт
kid = person;

console.log(person, kid); // {name: 'Batman'} {name: 'Batman'}

// Функція
const createUser = (name, city) => {
    const user = {
        name: name,
        city: city,
    }
    return user;
}

console.log(createUser("Jim", "Gotham")); // {name: 'Jim', city: 'Gotham'}