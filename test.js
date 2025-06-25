//Zeilenkommentare
/*
 * Mehrzeiliger
 * Kommentar
 */

//Datentypen und Variablen

//Alt: sowohl constante als auch varibale (initialisierung ohne Zuweisung immer am Anfang des Dokuments)
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

//Object
// Objekte bestehen aus sogenannten Key-Value Pairs in folgender Notation:
// key: value -> der key ist der eindeutige Identifier und unabhängig vom Datentypen (technischer Name), der Value repräsentiert die zugrundeliegenden Daten
let objectName = {
  name: 'Name',
  firstName: 'First Name',
  yearOfStudy: 2024,
};
//Class

//Ausgabe in der Konsole zur Validierung von Daten
console.log(objectName.name);
