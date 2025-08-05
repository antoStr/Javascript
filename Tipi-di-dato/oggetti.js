// I letterali oggetti sono dei tipi di dato che ci pemettono di creare delle serie di copie chiave valore attraverso le {}. In javascript possiamo utilizzare per chiave solo stringhe o simboli.

let obj1 = {
  key1: 10,
  key2: 20,
  key3: "ciao",
  //  10: "ciao",  mi da errore perchè come detto prima posso usare solo stringhe come chiave
};

// Accesso al valore indentificativo
// nomeVariabile.nomeChiave
console.log(obj1.key1);
console.log(obj1.key2);
console.log(obj1.key3);

// Accesso con array associativo
// nome.variabile["nomeChiave"]
console.log(obj1["key1"]);

// Con l'accesso con array associativo posso rendere il mio codice dinamico:
const k1 = "key3";
console.log(obj1[k1]);

/* 
    Mi può essere utile per esempio se devo assegnare dinamicamente dei valori con dei cicli

    let k = "";
    let keyType = "first" 

    if ( keyType == "first"){
        k = "key1"
    } else {
        k = "key2"
    }

    Assegno in base all'utilizzo le varie chiavi dell'oggetto. Qui dopo il primo oggetto saranno sempre con key2 ma mi premeva ricordare che potrebbe essere utile in questo modo in futuro :)
*/

const persona1 = {
  firstName: "Antonio",
  lastName: "Android",
  country: "Italia",
  age: 25,
  developer: true,
  favNumbers: [7, 13, 17, 10, 21],

  // esempio di funzione
  sayHello: function () {
    console.log("ciao!");
  },
};

console.log(
  "La persona1 è: " +
    persona1.firstName +
    " " +
    persona1.lastName +
    " ed ha " +
    persona1.age +
    " anni."
);

if (persona1.developer == true) {
  console.log("Persona1 è un developer");
} else {
  console.log("Persona1 non è un developer");
}

persona1.sayHello(); // Ho richiamato il metodo dell'oggetto persona1 con nomeVariabile.nomeMetodo() come ho fatto precedendemente con il toUpperCase() per esempio (vedi riga 34 stringhe.js)

// iterazione array in un oggetto con ciclo for
for (let i = 0; i < persona1.favNumbers.length; i++) {
  console.log(persona1.favNumbers[i]);
}

console.log("");
console.log("Esercitazione innestazionabile ahaha");
// iterazione oggetto in un oggetto con foreach
let obj2 = {
  obj1: {
    k1: 10,
    k2: "ciao",
    k3: true,
    k4: {
      here: function () {
        console.log("sono qui!");
      },
    },
  },
};

obj2.obj1.k4.here();
