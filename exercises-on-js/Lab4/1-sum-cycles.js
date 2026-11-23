// Ітерування циклами
"use strict";

// 1. Цикл for
function sum1(...args) {
    const arr = [...args];
    let res1 = 0;

    for (let i = 0; i < arr.length; i++) {
        res1 += arr[i];
    }
    return res1;
}

// 2. Цикл for of
function sum2(...args) {
    let res2 = 0;

    for (let item of args) {
        res2 += item;
    }
    return res2;
}

// 3. Цикл while
function sum3(...args) {
    const arr = [...args];
    let res3 = 0;
    let i = 0;

    while(i < arr.length) {
        res3 += arr[i];
        i++;
    }
    return res3;
}

// 4. Цикл do while
function sum4(...args) {
    const arr = [...args];
    let res4 = 0;
    let i = 0;

    do {
        res4 += arr[i];
        i++;
    } while (i < arr.length);
    return res4;
}

// 5. Метод reduce()
function sum5(...args) {
    const arr = [...args];
    let res5 = 0;

    res5 = arr.reduce((acc, value) => acc + value);
    return res5;
}

const a = sum1(1, 2, 3) // a === 6
const b = sum2(0) // b === 0
const c = sum3() // c === 0
const d = sum4(1, -1, 1) // d === 1
const e = sum5(10, -1, -1, -1) // e === 7

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);