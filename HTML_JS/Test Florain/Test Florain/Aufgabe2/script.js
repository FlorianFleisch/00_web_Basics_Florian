
const numbers = "8,2,1,4,6,1,8,7";
// Zähle alle Zahlen die zwischen 4 (inklusive und 8 exklusive) liegen
// Output: 3

let numbs = numbers.split(",");

let count = 0;

for (let i = 0; i < numbs.length; i++) {
    let num = parseInt(numbs[i]);
    if (num >= 4 && num < 8) {
        count++;
    }
}

console.log(count);
