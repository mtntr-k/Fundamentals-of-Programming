// Функція, що виконує математичні дії і має підписку на помилку, якщо введено неправильний тип аргументу

type PipeFunc = (x: number) => number;
type ErrorHandler = (e: Error) => void;

const pipe = (...fns: any[]) => {
    let savedHandler: ErrorHandler | null = null;

    const f = (x: number) => {
        try {
            return fns.reduceRight((acc: number, fn: PipeFunc) => fn(acc), x)
        }
        catch(error) {
            if (savedHandler) {
                savedHandler(error as Error);
            } else {
                return undefined;
            }
        }
    }
    f.on = (event: 'error', handler: ErrorHandler) => {
        if (event === 'error') {
            savedHandler = handler;
        }
        return f;
    }

    return f;
}

const inc = (x: number) => x + 1;
const twice = (x: number) => x * 2;
const cube = (x: number) => x ** 3;

const f1 = pipe(inc, twice, cube);
const f2 = pipe(inc, inc);
const f3 = pipe(inc, 7, cube);

console.log(f1(5)); // 251
console.log(f2(7)); // 9
console.log(f3.on('error', (e) => console.error("Catched error:", e.message)));
console.log(f3(3));

