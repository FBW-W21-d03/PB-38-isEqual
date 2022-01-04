// javascript-isEqual

/* Aufgabenstellung - Teil 1
Schreibe eine Funktion isEqual(number).*/

/*Die Funktion hat einen Parameter namens "number".

In der Funktion soll geprüft werden, ob es sich um eine gerade oder ungerade Zahl handelt.
Falls number eine gerade Zahl ist, wird die Ausgabe "Die Zahl ist gerade" in die Konsole geschrieben.
Andernfalls die Ausgabe "Die Zahl ist ungerade".*/

function isEven(value) {
    if (value %2 == 0)
     console.log("Die Zahl ist gerade")
      else
      console.log("Die Zahl ist ungerade")
   } 

isEven(0)
/*Aufgabenstellung - Teil 2
Teste deine Funktion.
Führe sie mit dem Argument 14 aus.
Führe sie anschließend mit dem Argument 17 aus.*/
isEven(14)
isEven(17)