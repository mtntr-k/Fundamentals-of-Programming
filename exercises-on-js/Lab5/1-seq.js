"use strict";

function seq(...args) {
  const funcs = [];
  
  function chain(...args) {
    for (let arg of args) {
        if (typeof arg === 'function') {
            funcs.push(arg);
        }
        if (typeof arg === 'number') {
            return funcs.reduceRight((res, fn) => fn(res), arg);
        }
    }
    return chain;
  }

  return chain(...args);
}

console.log(
  seq(x => x + 7)
     (x => x * 2)(5)
); // 17

console.log(
  seq(x => x * 2)
     (x => x + 7)(5)
); // 24

console.log(
  seq(x => x + 1)
     (x => x * 2)
     (x => x / 3)
     (x => x - 4)(7)
); // 3