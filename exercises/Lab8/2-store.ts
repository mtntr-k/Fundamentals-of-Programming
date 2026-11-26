// Функція, яка зберігає значення в замиканні

const store = <T>(value: T): (() => T) => {
    return () => value;
}

const read = store(5);
const value = read();
console.log(value); // 5