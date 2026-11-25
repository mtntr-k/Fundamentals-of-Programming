// Функція для видалення кількох елементів з масиву

const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const arrayOfStrings = ['Kyiv', 'Beijing', 'Madrid', 'Milan'];

export function removeElements (array: any[], ...items: any[]): any[] {
    return array.filter((element) => !items.includes(element));
}

console.log(
removeElements(arrayOfStrings, 'Madrid', 'Milan'), '\n', // ['Kiev', 'Beijing']
removeElements(arrayOfStrings, 'Berlin'), '\n', // ['Kyiv', 'Beijing', 'Madrid', 'Milan'] 
removeElements(arrayOfNumbers, 5), '\n', // [1, 2, 3, 4, 6, 7]
removeElements(arrayOfNumbers, 5, 6, 7)) // [1, 2, 3, 4]