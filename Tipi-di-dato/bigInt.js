// Il bigInt è uno speciale tipo numerico primitivo che fornisce supporto per numeri interi di lunghezza arbitraria.

// 2^53 - 1 ( Number.MAX_SAFE_INTEGER )  Dimensione max di un numero int dove i numeri non possono essere più rappresentati per precisione. BigInt permette di superare questo limite

// Per creare un bigInt basta aggiungere la "N" alla fine di un intero letterale oppure chiamandola funzione bigInt con un numero o una stringa che rappresenta un numero grande.

let n1 = 81763978623917868721697870573918798719857n;

let n2 = BigInt("987987097307824783206570953631709809875325");

console.log(n1);
console.log(n2);

console.log(typeof n1, typeof n2);

let n3 = BigInt(10);
console.log(n3, typeof n3);

// Operazioni con bigInt

console.log(10n - 3n);
console.log(5n / 2n); // Il risultato è sempre un bigInt che non rappresenterà numero razionale, troncherà tutta la parte decimale comportandosi come una divisione intera

// console.log(10n - 4); // non si può fare, non possiamo mescolare valori bigInt con altri tipi

console.log(4n + "ciao"); // la concatenazione di stringhe funziona

let v1 = 130n;
let v2 = 23;
let v3 = true;
let v4 = "ciao";

console.log(v1 + BigInt(v2)); // ho convertito v2 in bigInt
console.log(Number(v1) + v2); // ho convertito v1 in numero

// console.log(+v1); // Non si può utilizzare l'operatore unario con i bigInt. L'operatore unario ci permette di convertire in numero un valore di tipo differente. E' un modo veloce per convertire un tipo in numero.
console.log(+v2);
console.log(+v3);
console.log(+v4); // NaN

// Confronto con bigInt

console.log(20n > 10n);
console.log(20n > 10); // il valore concettuale 20 è maggiore di 10
console.log(20n == 20); // sono concettualmente uguali
console.log(20n === 20); // sono concettualmente uguali ma hanno tipo diverso quindi ci dà false

// 0n è un falsy value quindi ci darà sempre false in un ciclo o in una condizione a differenza di tutti gli altri numeri che saranno truthy values quindi come 1n 2n 13n 1331n etc.
if (0n) {
  console.log("truthy value");
} else {
  console.log("falsy value");
}

if (13n) {
  console.log("truthy value");
} else {
  console.log("falsy value");
}

// L'operatore || restituisce il primo valore "truthy" (vero), altrimenti il secondo valore.
console.log(10n || 2);
console.log(0n || 13);
