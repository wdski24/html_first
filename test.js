//Zeilenkommentare
/*
 * Mehrzeiliger
 * Kommentar
 */

//Datentypen und Variablen

//Alt: sowohl constante als auch varibale (initialisierung ohne Zuweisung immer am Anfang des Dokuments = immer Global)
var a = 'variabel';

//Neu: let ist variabel const ist constant (initialisierung zur Laufzeit an entsprechender Stelle)
let b = 'varibale';
const c = 'constant';

//String
let stringVar = 'string';
//Number
let intVar = 1;
let floatVar = 1.2;

//Arrays
let intArrayVar = [1, 2, 3];
let floatArrayVar = [1.2, 2.3, 3.5];
let stringArrayVar = ['eins', 'zwei', 'drei'];

//Boolean
let boolVar = true; // false;

//Object
// Objekte bestehen aus sogenannten Key-Value Pairs in folgender Notation:
// key: value -> der key ist der eindeutige Identifier und unabhängig vom Datentypen (technischer Name), der Value repräsentiert die zugrundeliegenden Daten
let objectName = {
  name: 'Name',
  firstName: 'First Name',
  yearOfStudy: 2024,
};

//Class
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

let rect1 = new Rectangle(12, 24);
console.log(rect1);

//Funktionen in JavaScript:
//ES5: function FUNKTIONSNAME (param1, ...., paramN){}
function add(value1, value2) {
  return value1 + value2;
}

//ES6: Supported Arrow Functions: Eine Variable kann auch den "Datentyp" Funktion haben
const sub = (value1, value2) => {
  return value1 >= value2 ? value1 - value2 : value2 - value1;
};
//Syntactic Sugaring: Funktion und Funktionsweise identisch zu vorheriger Funktion
//const sub = (value1, value2) => value1 - value2;

//Conditions
// Vergleichsoperatoren:
/*
 * == : nicht Casesensitive Prüfung auf Gleicheit (BITTE NICHT VERWENDEN)
 * === : Casesensitive Prüfung auf Gleicheit
 * != : nicht Casesensitive Prüfung auf Ungleicheit (BITTE NICHT VERWENDEN)
 * !== : : Casesensitive Prüfung auf Ungleicheit
 * <= : kleiner gleich Prüfung
 * >= : größer gleich Prüfung
 * < : kleiner als Prüfung
 * > : größer als Prüfung
 */
//if/else (immer optional)
if (value > 0) {
} else {
}

//if/else if / else(nicht optional)
if (value > 5) {
} else if (value > 0) {
} else {
}

//Ternary Operator
value > 5 ? (value = 2) : 7;

//loops

for (let i = 1; i < 10; i++) {
  intVar += i;
}

while (intVar < 10) {}
do {} while (intVar < 10);

//Operators
/*
 * i = i+1 identisch zu i +=1 identisch zu i++
 * i = i-1 identisch zu i -=1 identisch zu i--
 * i = i+var identisch zu i += var
 * i = i-var identisch zu i -= var
 */

//Ausgabe in der Konsole zur Validierung von Daten
console.log(sub(12, 14));
