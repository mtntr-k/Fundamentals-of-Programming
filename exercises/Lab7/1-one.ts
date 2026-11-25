// Функція для видалення одного елемента з масиву

const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const arrayOfStrings = ['Kyiv', 'Beijing', 'Madrid', 'Milan'];

export function removeElement (array: any[], item: any): any[] {
    let index = array.indexOf(item);

    if (index >= 0) {
        array.splice(index, 1);
    }
    return array;
}

removeElement(arrayOfStrings, 'Madrid');
removeElement(arrayOfStrings, 'Berlin');
removeElement(arrayOfNumbers, 5)

console.log(arrayOfStrings); // ['Kyiv', 'Beijing', 'Milan']
console.log(arrayOfNumbers); // [1, 2, 3, 4, 6, 7]