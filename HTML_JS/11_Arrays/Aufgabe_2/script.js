// The program:
// Invertiere eine Bitfolge


// EXAMPLE:
// Input
// 000111000
// Output
// 111000111

const input = "111111000";

let array = input.split("");
let output = "";

for (let i = 0; i <= array.length; i++) {
    if (array[i] === "0") {
        output += "1";
    } else {
        output += "0";
    }

}

console.log(output);