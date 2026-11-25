// Функція, що виконує математичні дії і може зловити помилку, якщо введено неправильний тип аргументу

type PipeFunc = (x: number) => number;

const pipe = (...fns: any[]) => (x: number) => {

    for (let fn of fns) {
        if (typeof fn !== 'function') {
            throw new Error("One of the values is not a function.");
        }
    }

    return fns.reduce((acc: number, fn: PipeFunc) => fn(acc), x)
}

const inc = (x: number) => x + 1;
const twice = (x: number) => x * 2;
const cube = (x: number) => x ** 3;

const f1 = pipe(inc, twice, cube);
const f2 = pipe(inc, inc);
const f3 = pipe(inc, 7, cube);

console.log(f1(5)); // 1728
console.log(f2(7)); // 9
console.log(f3(3)); // Error: One of the values is not a function.
