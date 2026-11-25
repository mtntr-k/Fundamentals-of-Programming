// Функція для повернення унікальних елементів

export function unique (array: any[]): any[] {
    return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(unique([2, 1, 1, 3, 2])); // [2, 1, 3]
console.log(unique(['top', 'bottom', 'top', 'left'])); // ['top', 'bottom', 'left']