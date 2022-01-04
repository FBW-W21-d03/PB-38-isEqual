// javascript-isEqual

/* Aufgabenstellung - Teil 1
Schreibe eine Funktion isEqual(number).*/

/*Die Funktion hat einen Parameter namens "number".
In der Funktion soll geprüft werden, ob es sich um eine gerade oder ungerade Zahl handelt.
Falls number eine gerade Zahl ist, wird die Ausgabe "Die Zahl ist gerade" in die Konsole geschrieben.
Andernfalls die Ausgabe "Die Zahl ist ungerade".*/

function isEqual(number) {
    if (number %2 === 0) {
        console.log(number, "ist eine gerade Zahl");
    }
    
    else{
        console.log(number, "ist eine ungeade Zahl");
    }
}
/*Aufgabenstellung - Teil 2
Teste deine Funktion.
Führe sie mit dem Argument 14 aus.
Führe sie anschließend mit dem Argument 17 aus.*/

isEqual(14);
isEqual(17);
