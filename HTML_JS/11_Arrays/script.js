// 	Erstelle ein Array mit folgenden Werten:
//	4,1,2,3
//	Füge die Werte 17 und 199 dazu
//	
//		a. Gib alle Werte in einer Schleife aus!
//		b. Zähle alle Werte zusammen und gib das Ergebnis aus
//		c. Berechne den Mittelwert der Zahlen und gib das Ergebnis aus


let arr = [4, 1, 2, 3,];
console.log(arr);

arr.push(17, 199);
console.log(arr);

    let ergebniss = 0;
    
    for(let i=0; i<=arr.length; i++){
        ergebniss += parseInt(arr[i]);
        console.log(ergebniss);
    }
    






// 	Erstelle ein Array mit folgenden Strings:
//	"Susi", "Paula", "Hans"
//
//	Gib folgenden Satz aus:
//	"Meine Freunde sind Susi, Paula und Hans
//
//	Füge "Sepp" dazu. Nun soll die ausgabe folgendermaßen lauten:
//	"Meine Freunde sind Susi, Paula, Hans und Sepp"


