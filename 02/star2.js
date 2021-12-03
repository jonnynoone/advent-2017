const input = require('./input.js');

const inputStr = input.data;
const rows = inputStr.split('\n');

let totalSum = 0;

rows.forEach(row => {
    let numbers = row.split('\t');
    let result;

    for (let i = 0; i < numbers.length; i++) {
        num1 = parseInt(numbers[i]);

        for (let j = 0; j < numbers.length; j++) {
            num2 = parseInt(numbers[j]);

            if (num1 !== num2) {
                if (num1 % num2 === 0) {
                    result = num1 / num2;
                }
            }
        }
    }

    totalSum = totalSum + result;
});

console.log(totalSum);