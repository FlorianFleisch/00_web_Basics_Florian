//Baue folgende Funktionen:

// add(a,b)
// subtract(a,b)
// mulitply(a,b)
// supercalculation(a,b) -> Formel: (a+b)/2 * a
// printEasterDate(year) -> Diese Funktion bekommt das gewünschte Jahr und schreibt das Datum von Ostern.


// Anbei ist die Formel zur Berechnung on Ostern. 



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function mulitply(a, b) {
    return a * b;
}

function supercalculation(a, b) {
    return a + b / 2 * a;
}





function printEasterDate(J) {

    let N = J - 1900;
    let A = N % 19;
    let B = Math.floor((7 * A + 1) / 19);
    let M = (11 * A + 4 - B) % 29;
    let Q = Math.floor(N / 4);
    let W = (N + Q + 31 - M) % 7;
    let P = 25 - M - W;

    if (P > 0) {
        console.log(P + ".April");
    }

    else {
        console.log(P + 31 + ".März");
    }

}

printEasterDate(2024);


