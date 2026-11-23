// Інтроспекція об'єкта
"use strict";

const introspect = (obj) => {
    let hash = [];

    for(const item in obj) {
        if (typeof obj[item] === "function") {
            hash.push([item, obj[item].length]);
        }
    }

    return hash;
}

const iface = {
    inc: x => x++,
    avr: function(x, y) {
        return (x + y) / 2;
    },
    div(x, y, z){
        return this.avr(x, y) * z;
    },
    max(x, y){
        return (x > y ? x : y);
    }
}

const res = introspect(iface);
console.log(JSON.stringify(res)); // [["inc",1],["avr",2],["div",3],["max",2]]