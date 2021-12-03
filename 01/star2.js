const input = require('./input.js');

const inputStr = input.data;
let finalSum = 0;
let nextNum = inputStr.length / 2;

for (let i = 0; i < inputStr.length; i++) {
    let x;
    let circle;

    if (i + nextNum >= inputStr.length) {
        circle = i + nextNum - inputStr.length;

        if (inputStr[i] === inputStr[circle]) {
            x = parseInt(inputStr[i]);
            finalSum = finalSum + x;
        }
    } else {
        if (inputStr[i] === inputStr[i + nextNum]) {
            x = parseInt(inputStr[i]);
            finalSum = finalSum + x;
        }
    }
}

console.table(finalSum);