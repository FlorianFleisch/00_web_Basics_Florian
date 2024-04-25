

// Write a program that prints the temperature closest to 0 among input data. If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5).

// Input
// 5
// 1 -2 -8 4 5
// Output
// 1sadfa


const input = "5 2 -2 -8 4 5";
let array = input.split(" ");

let min = Infinity;

for (let i = 0; i < array.length; i++) {
    let num = parseInt(array[i]);
    if (num >= 0 && num < min) {
        min = num;
    } else if (min <= 0 && num === min) {
        min = num;
    }
}

console.log(min);
