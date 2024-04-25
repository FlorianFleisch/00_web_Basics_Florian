const temperaturesWeek1 = "-1,5,1,-10,-11,2,30,-8,-14";
const temperaturesWeek2 = "-1,5,3,-10,-11,2,30,-8,-44";
// Berechne den Mittelwert der Temperaturen der beiden Wochen
// Gib aus
// Mittelwert Woche 1 : xxx
// MIttwlwert Woche 2 : xxx
// "Woche 1 war wärmer" oder "Woche 2 war wärmer" oder "Beide Wochen waren gleich warm"

let split1 = temperaturesWeek1.split(",");
let split2 = temperaturesWeek2.split(",");

let sumWeek1 = 0;

for (let i = 0; i < split1.length; i++) {
    sumWeek1 += parseInt(split1[i]);
}

let sumWeek2 = 0;

for (let i = 0; i < split2.length; i++) {
    sumWeek2 += parseInt(split2[i]);
}

let averageWeek1 = sumWeek1 / split1.length;

let averageWeek2 = sumWeek2 / split2.length;

if (averageWeek1 > averageWeek2) {
    console.log("Woche 1 war wärmer");
} else if (averageWeek2 > averageWeek1) {
    console.log("Woche 2 war wärmer");
} else if (averageWeek1 == averageWeek2) {
    console.log("Beide Wochen waren gleich warm");
}
