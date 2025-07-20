// STRINGHE

/*
Le stringhe sono un dato primitivo di javascript, esse sono immutabili ed hanno metodi specifici ereditati dalla classe string. 
Non sono array di caratteri o simili, le stringhe condividono similarità con gli array come alcuni metodi ma gli array sono oggetti mentre le stringhe sono un tipo primitivo.
*/

// Le stringhe possono essere create usando "" o ''.

let saluto = "Ciao ";
let persona = "Antonio";
let endSauto = "!";
console.log(saluto + persona + endSauto);

/* 
L'operatore + mi somma le stringhe e mi genera un output stringa, quindi in base al tipo degli operandi lui si adatta.
*/

let s1 = "Io sono una stringa";

console.log(typeof s1);
console.log(10 + 20 + s1 + 13);

/*
Un aspetto fondamentale di js è che è un linguaggio orientato algi oggetti (o nello specifico ai prototipi) in cui ogni tipo di dato è un istanza del prototipo di una particolare classe.

Una variabile di tipo stringa in questo caso appartiene alla classe 'string' e di conseguenza in questo caso, s1 erediterà metodi e funzionalità che appartengono alla classe padre string.

Per usare un metodo eseguo: 
    nomeVariabile.nomeMetodo();
*/

// Esistono moltissimi metodi per le stringhe e ne vedremo qualcuno qui sotto:

console.log(s1.toUpperCase()); // me lo cambia solo nel console log
console.log(s1.toLocaleLowerCase());

// Metodo charAt - ci restituisce la posizione di un carattere partendo da 0. Tiene conto anche degli spazi

console.log(s1.charAt(9));

// Proprietà lenght - ci restituisce la lunghezza di una stringa basata sulla quantità di caratteri esistenti di una stringa compresi di spazi. Essa non parte da 0 ma da 1 poichè non avrebbe senso partire da 0 per sommare dei caratteri esistenti, quindi se ne trova 1 all'inizio appunto partirà da 1

/* 
    .charAt()
    "Io sono una stringa"
     0123456789          n

    .lenght
    "Io sono una stringa"
     123456789---------- 19 
*/
console.log(s1.length);

// Possiamo wrappare le propietà precedenti per ottenere un carattere finale di una qualsiasi parola. Per far euguagliare il charat con il lenght faccio -1 (il charat controlla anche la posizione 0 quindi parte da 0 mentre la proprietà lenght parte da 1. Con un -1 euguaglio questa discrepanza)

let stringaTest = "Ciao io sono una stringa test!";
console.log(stringaTest.charAt(stringaTest.length - 1));

// Con i caratteri di escape posso andare ad usare le virgolette doppie all'interno di una stringa. L'ho commentata sennò prettier me la genera utilizzando due tipi di virgolette per ovviare ad un problema poichè: let x = "ciao io sono "antonio"" è un errore perchè le virgolette chiudono poi quella iniziale e creano problemi nel codice.
// let s2 = "Ciao! Io sono \"antonio\" ";
let s2 = 'Ciao! Io sono "antonio" ';

// Metodo replace - Mi permette di modificare una sottostringa con un'altra sottostringa

let s3 = "Questo è un Antonio";
console.log(s3.replace("antonio", "javascript")); // js è caseSensitive quindi non funziona.
console.log(s3.replace("Antonio", "javascript")); // (:
