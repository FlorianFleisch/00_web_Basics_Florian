import { read } from "fs";
import { createInterface } from "readline";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);

        });
    });
};


let feld = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let activePlayer = 0;

while (true) {
    let input = await readLineAsync();
    let arr = input.split(",");
    let row = arr[0]
    let col = arr[1]

    console.log(arr);

    feld[row][col] = 1;

    console.log(input);
    printField();
}

function printField() {

    for (let row = 0; row < feld.length; row++) {
        let actualrow = feld[row];
        let output = "";
        for (let col = 0; col < actualrow.length; col++) {

            output += actualrow[col] + "";
        }
        console.log(output);
    }
}


