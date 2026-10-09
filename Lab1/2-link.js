// Посилання на поле об'єкта
"use strict";

const inc2 = (Num) => {
    Num.n += 1;
}

const obj = {n: 5};
inc2(obj);
console.log(obj); // {n: 6}