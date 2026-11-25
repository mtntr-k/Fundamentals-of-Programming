// Функція, що повертає різницю між масивами
import { unique } from "./3-new.js";

export function difference (array1: any[], array2: any[]) {
    return unique(array1.filter((item) => !array2.includes(item)));
}

const arrayOfNumbers1 = [7, -2, 10, 5, 5, 5, 10, 0];
const arrayOfNumbers2 = [0, 10];
console.log(difference(arrayOfNumbers1, arrayOfNumbers2)); // [7, -2, 5]

const arrayOfStrings1 = ['Beijing', 'Kyiv', 'Kyiv'];
const arrayOfStrings2 = ['Kyiv', 'London', 'Baghdad'];
console.log(difference(arrayOfStrings1, arrayOfStrings2)); // ['Beijing']