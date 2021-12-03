const input = require('./input.js');

const inputStr = input.data;
const rows = inputStr.split('\n');

let checksum = 0;

rows.forEach(row => {
    let numbers = row.split('\t');

    let maxVal = largestValue(numbers);
    let minVal = smallestValue(numbers);

    let rowDiff = maxVal - minVal;
    checksum = checksum + rowDiff;
});

console.log(checksum);

function largestValue(numbers) {
    let value = parseInt(numbers[0]);

    numbers.forEach(x => {
        if (parseInt(x) > value) {
            value = parseInt(x);
        }
    });

    return value;
}

function smallestValue(numbers) {
    let value = parseInt(numbers[0]);

    numbers.forEach(x => {
        if (parseInt(x) < value) {
            value = parseInt(x);
        }
    });

    return value;
}