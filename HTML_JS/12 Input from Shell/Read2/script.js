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

let balance = 0;

while (true) {
    console.log("Selektiere deine Option...1 2 ");
    let selection = await readLineAsync();

   

    switch (selection) {
        case "1":
            console.log("Selected 1");
            break;
        case "2":
            console.log("Selected 2");
            break;
        case "3":
            console.log("Selected 3");
            break;

        default:
            break;
    }

}

readline.close();