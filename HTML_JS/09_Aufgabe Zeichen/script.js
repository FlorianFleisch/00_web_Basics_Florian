
//Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren): 



for (let index = 0; index < 1; index++) {
    console.log("xxxx");
    if (index % 6 == 0);
}

for (let index = 0; index < 1; index++) {
    console.log("OOOO");
    if (index % 6 == 0);
}

for (let index = 0; index < 1; index++) {
    console.log("xxxx");
    if (index % 6 == 0);
}

for (let index = 0; index < 1; index++) {
    console.log("OOOO");
    if (index % 6 == 0);
}


// 2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.) 

let summe = 0;
for (let index = 1; index <= 100; index++) {
    if (index % 2 == 0) {
        console.log(summe += index);
    }
    if (index == 100) {
        console.log(summe);
    }

}

//3. Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben, z.B.: 
// XXXXXX
// X
// XXXXXX
// X
// X


for (let index = 0; index < 6; index++) {
    if (index % 2 == 0 && index != 4) {
        console.log("XXXXXX");
    }
    if (index % 2 != 0) {
        console.log("X");
    }
}