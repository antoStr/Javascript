// Quando andiamo a creare un dato in questo caso ho assegnato ad x il valore 10, quel 10 in javascript è chiamato 'Letterale' che in questo caso specifico è un letterale che identifica un numero quindi un letterale numerico. Ci sono diversi tipi primitivi di 'Letterali' che elencherò qui sotto.

let x = 10;

// LETTERALI NUMERICI
let y = 10;
let z = 10.1;

// LETTERALI STRINGA
let stringa1 = "ciao io sono una stringa";
/*
let stringa2 = 'ciao io sono un'altra stringa';

Prettier mi cambiava in automatico la stringa con apici singoli per motivi di consistenza del codice e formattazione ma scrivere una stringa con apici singoli o doppi non cambia(in javascript funziona così ma in altri linguaggi è diverso).
*/

// LETTERALI BOOLEANI
let b1 = true;
let b2 = false;

if (x >= 0) {
  console.log("è maggiore");
} else {
  console.log("è minore");
}

x >= 0 ? "è maggiore" : "è minore";

console.log(x >= 0 ? "è maggiore" : "è minore");
/*

x = 10;

Il blocco if ed il blocco sotto fanno la stessa cosa, utilizzano l'operatore ternario dove:
- il primo blocco utilizza un blocco if più facile da leggere ma più lungo da scrivere.
- la seconda riga invece fa le stesse cose dell'if ma in maniera più concisa.

'?' separa la condizione vera
':' separa la condizione falsa

In questo caso se x >= 0 (? => se è positivo allora fai) "è maggiore" (: => altrimenti fai) "è minore"

*/

if (b1 == true) {
  console.log("è vero");
} else {
  console.log("è falso");
}

b1 == true ? "è vero" : "è falso";

console.log(b1 == true ? "è vero" : "è falso");
/*
Nel booleano devo utilizzare l'operatore di comparazione == 
*/

// LETTERALI ARRAY
let collection = [10, 20, 11.19, "ciao", true];
console.log(collection);
/* 
Gli array a differenza degli altri letterali sono tipi di dato vettoriali mentre gli altri sono scalari.
*/
