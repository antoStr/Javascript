/*
L'hoisting è un comportamento che consente all'interprete di muovere le dichiarazioni di determinati tipi di elementi, variabili o funzioni all'inizio dello script. Esso ci permette di dichiarare una variabile dopo che questa è stata inizializzata.

Il codice in js lo eseguiamo prima con l'inizializzazione e poi con la dichiarazione.
*/

// Inizializzo
let x;

// Dichiaro
x = 20;

// Utilizzo
console.log(x); // 20

/*
Se eseguissi il console log otterrei 20.
Se eseguissi invece prima la dichiarazione e poi l'inizializzazione otterrei un errore.

Per ovviare a questo errore posso usare la variabile var che è affetta da hosting ed otterrei lo stesso risultato che ho con let.

Ricorda che se eseguo in questo caso un:

z = 10; 
var z;
console.log(z);  // 10

Posso quindi con var dichiararla anche dopo il console log e l'hoisting farà risalire z sopra al codice, ci farà ottenere z undefined, ed infine otterremo 10.
*/

// Inizializzo
var y;

// Dichiaro
y = 20;

// Utilizzo
console.log(y);

/*  
ATTENZIONE:  
Let e const sono affette da hoisting, ma non vengono inizializzate automaticamente.  
Questo significa che, se si prova ad accedere a una variabile dichiarata con let o const prima della sua inizializzazione, si verifica un errore di riferimento (ReferenceError).  

Questo comportamento è dovuto alla *Temporal Dead Zone* (TDZ), una fase in cui la variabile esiste ma non è ancora stata inizializzata, rendendola inaccessibile fino alla riga in cui viene effettivamente dichiarata e inizializzata.
*/

// Esempio di come la TDZ funziona
{
  // bestFood’s TDZ starts here (at the beginning of this block’s local scope)
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  console.log(bestFood); // returns ReferenceError because bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
}

{
  // TDZ starts here (at the beginning of this block’s local scope)
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  // bestFood’s TDZ continues here
  let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
  console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
  // bestFood’s TDZ does not exist here
}
