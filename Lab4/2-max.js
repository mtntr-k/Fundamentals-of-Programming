// Ітерування по двувимірному масиву
"use strict";

function max([...args]) {
    const arr = [...args];
    let arrOfMax = [];
    let maxNum;
    let res;

    for(let item of arr) {
        maxNum = item[0];

        for (let i of item) {
            if (i > maxNum) {
                maxNum = i;
            }
        }
        arrOfMax.push(maxNum);
    }

    res = arrOfMax[0];
    for (let j of arrOfMax) {
        if (j > res) {
            res = j;
        }
    }
    return res;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

console.log(m); // 9