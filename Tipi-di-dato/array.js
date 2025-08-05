// Gli array sono tipi di dato vettoriali che permettono di immagazzinare molteplici valori a differenza di una variabile numerica che è scalare che conterrà appunto un solo valore ( let x = 10 );

let a1 = [10, 20, 30, 40, 50, 60];

// Come per le stringhe gli array avranno i loro metodi ereditati e tutto il resto (vedi file stringe.js)

// Accedo agli elementi di un array con nomeArray[PosizioneElemento]
console.log("L'array a1 ha lunghezza: " + a1.length);
console.log("Il primo numero dell'array è: " + a1[0]);

/* 
Length       1    2    3    4    5
Indice       0    1    2    3    4
            [10   20   30   40   50]
*/

// Ho messo qui -1 perchè lenght parte da 1 e non 0, quindi per equiparare ho sottratto uno ed ho ottenuto l'ultimo elemento dell'array
console.log("L'ultimo valore dell'array è: " + a1[a1.length - 1]);
console.log("");

let a2 = ["python", "javascript", "java", "php", "c", "c++"];

// Iterazione array con forEach
// Ogni array ha dei metodi come detto prima, in questo caso ho utilizzato un metodo forEach che prende una funzione che ci printa ogni elemento dell'array.
console.log("Iterazione con forEach");
a2.forEach(function (elemento, indice, all) {
  console.log("Elemento numero " + indice + ": " + elemento);
  // console.log(all); stampa l'array completo ma sporca solo la console al momento
});
console.log("");
/* Il metodo forEach sempre passa i parametri in questo ordine fisso:

Primo parametro = l'elemento corrente
Secondo parametro = l'indice
Terzo parametro = l'array completo (raramente usato) 

Inoltre è utile ricordare che elemento ed indice in una funzione posso rinominarli come voglio, cerco sempre di rispettare la semantica e via dicendo (elemento = el, indice = i etc..)
*/
console.log("Iterazione con ciclo for");
// Iterazione con ciclo for
for (let i = 0; i < a2.length; i++) {
  console.log("Elemento numero " + i + ": " + a2[i]);
}

console.log("");
console.log("Iterazione con ciclo for al contrario");
for (let i = a2.length - 1; i >= 0; i--) {
  console.log("Elemento numero " + i + ": " + a2[i]);
}

/* 
    Nota:
    Quando faccio un ciclo for ho "i < array.length" e mi domando: Ma perchè non "<=" alla fine voglio andare a prendere anche l'ultimo elemento.

    Ricorda che length parte da 1 a differenza dell'indice dell'array che parte da 0, quindi quando va ad iterare l'ultimo elemento si ferma perchè l'elemento finale non esiste essenzialmente.
    Esempio:

    let a3 = [10, 20, 30, 40, 50]
    length    1   2   3   4   5   
    index     0   1   2   3   4

    for (let i = 0; i < a3.lenght; i++ {
        ...
    })

    in "i < a3.lenght" a lenght = 5 (che è la lunghezza del mio array che alla fine è il valore che ottengo appunto facendo il .length) ho 50 che però successivamente quando andrò ad iterare i con un index, la posizione 5 non esisterà perchè l'index massimo è 4, quindi con il "<" escludo il 5 fermandomi a 4.

    E' lo stesso ragionamento fatto un paio di volte fa con stringe e via dicendo ma applicato al ciclo for.
    */
