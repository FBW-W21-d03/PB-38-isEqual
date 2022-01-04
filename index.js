function myFunction(paramA , paramB){
    let myObject = {
        label1: paramA,
        label2: paramB
    };
    console.log(myObject);
}
myFunction("blue" , "medium");

console.log("-----------------");
// aufgabe teil1

function isEqual(number){
    if (number %2 == 0) {
        console.log("Die Zahl ist gerade");
    } else {
        console.log("Die Zahl ist ungerade");
    }
}
//aufgabe teil 2

isEqual(14);
isEqual(17);