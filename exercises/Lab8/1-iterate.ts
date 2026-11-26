// Функція, яка ітерує всі ключі переданого об'єкта, викликаючи для кожного колбек з наступним контрактом

const iterate = (obj: Record<string, unknown>, callback: (key: string, value: unknown, obj: Record<string, unknown>) => void) => {
    const keys = Object.keys(obj);

    for (const key of keys) {
        callback(key, obj[key], obj);
    }
}

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
}); 
/* { key: 'a', value: 1 }
{ key: 'b', value: 2 }
{ key: 'c', value: 3 } */