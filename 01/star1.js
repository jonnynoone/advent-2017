const input = require('./input.js');

const inputStr = input.data;
let finalSum = 0;

for (let i = 0; i < inputStr.length; i++) {
    if (i === inputStr.length - 1) {
        if (inputStr[i] === inputStr[0]) {
            let x = parseInt(inputStr[i]);
            finalSum = finalSum + x;
        }
    } else {
        if (inputStr[i] === inputStr[i + 1]) {
            let x = parseInt(inputStr[i]);
            finalSum = finalSum + x;
        }
    }
}

console.table(finalSum);