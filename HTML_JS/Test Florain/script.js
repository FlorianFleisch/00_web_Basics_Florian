// const data = "Hans geht heute schwimmen";

// let array = data.split(" ");

// let output = "";
// for (let i = array.length - 1; i > 0; i--) {
//     output += array[i];
//     output += " ";
// }

// console.log(output);




const numbers = "1,2,1,4,6,8,7";

let numbs = numbers.split(",");

let min = Infinity;

for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] < min) {
        min = numbs[i];
    }
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];

}

console.log(min);
