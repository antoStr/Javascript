// NUMERI

/* 
Operatori:
    addizione +
    sottrazione -
    moltiplicazione *
    divisione /
    resto %
*/

let x = 10;
let y = 20.5;
let z = 2;

// Posso utilizzare la notazione esponenziale per rappresentare numeri.
let k = 10e2; //  1000
let j = -5e2; // -500

// Posso scrivere tutto in un unica riga (let a=5,b=2,c=7, result = (a*b)/c;) e prettier in questo caso mi indenta tutto
let a = 5,
  b = 2,
  c = 7,
  result = (a * b) / c;

console.log(x + 10); // 20
console.log(x + y); // 30.5

// Converte una stringa in un numero intero "20.5" -> 20
console.log(parseInt(x + y));

// Rimuove la parte decimale di un numero
console.log(Math.trunc(x + y));

// Posso utilizzare le operazioni nell'assegnazione di una variabile
let result2 = (x * y) / z;
console.log(result);

// Posso utilizzare typeOf per conoscere il tipo del dato che voglio appunto conoscere. Come puoi vedere js non fa distinzione fra un double ed un numero intero, per lui sono tutti number e basta
console.log(typeof result);
console.log(typeof y);
console.log(typeof x);
