let feld = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

for (let row = 0; row < feld.length; row++) {
    let actualrow = feld[row];
    let output = "";
    for (let col = 0; col < actualrow.length; col++) {

        output += actualrow[col] + "";
    }
    console.log(output);
}

