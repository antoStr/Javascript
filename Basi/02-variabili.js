/*
Possiamo definire una variabile utilizzando:
    Var 
    Let
    Const

    Var -> crea variabili gobali all'interno dello script ma inquina lo scope globale, anche quando non utilizzata rimane in memoria. Var è una keyword ormai datata e si preferisce utilizzare let.

    Let -> crea variabili riassegnabili globali e locali all'interno dello script

    Const -> crea costanti non riassegnabili globali e locali all'interno dello script

*/

/* 
    let nomeVariabile = valoreVariabile
*/

// Buona norma mettere il punto e virgola anche se il codice funziona uguale
let x = 10;
console.log(x);

let y; // y rimane undefine ma dichiarata
y = 100; // ora y ha il valore 100
console.log(y);

var numero = 14;
console.log(numero);

const z = 200;
console.log(z);
