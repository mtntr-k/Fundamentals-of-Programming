// Функції
"use strict";

// 1. Середнє арифметичне
const average = (a, b) => {
    return (a + b) / 2;
}
console.log(average(34, 86));

// 2. Квадрат
const square = (x) => x * x;
console.log(square(9));

// 3. Куб
function cube(y) {
    return y * y * y;
}
console.log(cube(6));

// 4. Цикл
function calculate() {
    const res = [];
    for (let i = 0; i < 10; i++) {
        res.push(average(square(i), cube(i)));
    }

    console.log(res);
}

calculate();