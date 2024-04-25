const data = "Hans geht heute schwimmen! das ist gut";
// Gib jedes 3te Wort aus
// Output
// Hans schwimmen gut


let array = data.split(" ");
let output = "";
for (let i = 0; i < array.length; i += 3) {
    output += array[i];
    output += " ";
}

console.log(output);
