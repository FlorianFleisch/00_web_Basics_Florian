import { log } from "console";
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



// Diese Aufgabe setzt sich aus allen gelernten Inhalten zusammen!
// Erstelle ein Programm, das einen Bankomaten simuliert. Folgende Möglichkeiten gibt es:
// 1. Einzahlen
// 2. Abheben
// 3. Kontostand
// 4. Beenden

console.log("Selektiere deine Option 1. Einzahlen 2. Abheben 3. Kontostand 4. Beenden");


let balance = 0;

mainloop: while (true) {

    let selection = await readLineAsync();

    switch (selection) {
        case "1":
            console.log("1.Einzahlen");
            console.log("Wie viel willst du einzzahlen?");
            let add = await readLineAsync();
            let addAsFloat = parseFloat(add);
            balance += addAsFloat;
            console.log(balance);
            break;
        case "2":
            console.log("Wie viel möchtest du abheben?");
            let minus = await readLineAsync();
            let minusAsFloat = parseFloat(minus);
            balance -= minusAsFloat;
            console.log(balance);
            break;
        case "3":
            console.log("3.Kontostand");
            console.log(balance);
            break;

        case "4":
            console.log("4.Beenden");
            break mainloop;

        default:
            break;
    }

}

readline.close();