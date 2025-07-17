// BOOLEAN

let a = true;
let b = false;

// Modi per checkare in una condizione
// operatore uguaglianza ==
// operatore disuguaglianza !=

if (a == true) {
  console.log("la condizione a è vera");
}

if (a) {
  console.log("la condizione a è vera");
}

if (a) {
  console.log("la condizione a è vera");
} else {
  console.log("la condizione a è falsa");
}

// L'operatore ternario utilizza assieme if ed else
a ? "la condizione a è vera" : "la condizione a è falsa";

if (b == false) {
  console.log("la condizione b è falsa");
}

if (!b) {
  console.log("la condizione b è falsa");
}

/* __________________ */

let s1 = "Antonio";

// Il metodo charAt controlla la posizione dei caratteri di una stringa
// Ricorda che javascript è case sensitive a != A
if (s1.charAt(0) == "A") {
  console.log("La parola inizia per 'A'");
} else {
  console.log("La parola non inizia per 'A'");
}

s1.charAt(0) == "A"
  ? console.log("La parola inizia per 'A'")
  : console.log("La parola non inizia per 'A'");

/* __________________ */

let c = 10;

if (c > 0) {
  console.log("c è maggiore di 0");
}

if (c >= 10) {
  console.log("c è maggiore o uguale di 0");
}

if (c < 100) {
  console.log("c è minore di 100");
}

c < 50 ? "c è minore di 50" : "c è maggiore di 50";
