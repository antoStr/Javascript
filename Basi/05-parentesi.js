/* 
Le parentesi graffe vengono utilizzate per definire dei blocchi di codice o per la produzione di letterali oggetti.

Nella produzione di cicli con UNA sola istruzione le graffe possono essere omesse.

E' una buona regola mettere sempre le graffe anche se i costrutti if hanno una sola istruzione.
*/

let x = 10;

if (x == 10) {
  console.log("x ha valore 10");
}

let y = 20;

if (y == 20) console.log("y ha valore 20");

let z = 40;

if (z == 30) console.log("z ha valore 30");
console.log("Secondo text");
// Anche se metto il log a capo per indentarlo e mettere un altro clg, esso non farà parte del costrutto if, per integrarlo devo mettere le graffe

/* 
Le parentesi tonde ci permettono di definire la firma di una funzione e la chiamata delle funzioni
*/

function fn() {
  console.log("fn");
}

fn();

/* 
Le parentesi quadre vengono utilizzate nella produzione di array.

Possono anche essere utilizzate per accedere ai valori di un array.

Possono essere utiizzate per accedere alle proprietà degli oggetti utilizzando una sintassi chiamata "Accesso tramite array associativo"
*/

const a = [10, 20, "ciao", 30, "js"];

console.log(a[0]);
console.log(a[a.length - 1]);

let obj = {
  x: 10,
  y: 20,
  m1: function () {
    console.log("m1");
  },
};
console.log(obj.x);
console.log(obj["x"]);

obj.m1();
obj["m1"]();
// Queste coppie di clg hanno lo stesso significato l'ultimo utilizza l'array associativo
