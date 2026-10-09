// Цикли
"use strict";

// Цикл 1: діапазон чисел
function range(start, end) {
    const res =[];
    for (let i = start; i <= end; i++) {
        res.push(i);
    }
    return res;
}

const arr1 = range(15, 30);
console.log(arr1);

// Цикл 2: діапазон непарних чисел
function rangeOdd(start, end) {
    const res = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 > 0) {
            res.push(i);
        }
    }
    return res;
}

const arr2 = rangeOdd(15, 30);
console.log(arr2);