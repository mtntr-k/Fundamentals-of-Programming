// Функція, яка обгортає передану функцію та перевіряє під час виконання типи її аргументів і результату

const contract = (fn: any, ...types: any[]) => (...args: unknown[]) => {
    const argTypes = types.slice(0, -1);
    const returnType = types[types.length - 1];

    for (let i = 0; i < argTypes.length; i++) {
        if (typeof args[i] !== argTypes[i].name.toLowerCase()) {
            throw new TypeError(`Argument ${i} must be ${argTypes[i].name}`);
        }
    }
    
    if (typeof fn(...args) !== returnType.name.toLowerCase()) {
        throw new TypeError(`Result must be ${returnType.name}`);
    }

    return fn(...args);
} 

const add = (a: number, b: number) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3)); // 5

const concat = (s1: string, s2: string) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.log(concatStrings('Hello ', 'world!')); // Hello world!