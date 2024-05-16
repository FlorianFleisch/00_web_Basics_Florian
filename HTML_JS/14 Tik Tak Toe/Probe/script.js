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
    [0, 0, 0]
    [0, 0, 0]
    [0, 0, 0]
];

let activePlayer = 0;

async function playerX() {
    console.log("Player X is active");
    let input = await readLineAsync();
    let arr = input.split(",");
    let row = arr[0]
    let col = arr[1]
    feld[row][col] == "X";
    printField();
    checkIfThereIsAWinner();
    playerO();

}
async function playerO() {
    console.log("Player O is active");
    let input = await readLineAsync();
    let arr = input.split(",");
    let row = arr[0]
    let col = arr[1]
    feld[row][col] == "O";
    printField();
    checkIfThereIsAWinner();
    playerX();
}

function printField() {

    for (let row = 0; row < feld.length; row++) {
        let actualrow = feld[row];
        let output = "";
        for (let col = 0; col < actualrow.length; col++) {

            output += actualrow[col] + " | ";
        }
        console.log(output);
    }

}

function checkIfThereIsAWinner() {
    // ceck rows
    for (let row = 0; row < feld.length; row++) {
        if (feld[row][0] === feld[row][1] && feld[row][1] === feld[row][2]) {
            console.log("Player wins" + feld[row][0]);
            if (feld[row][0] != 0) {
                console.log("The winner is " + feld[row][0]);
            }
        }
    }


}


playerX();


