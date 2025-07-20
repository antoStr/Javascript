// I nomi delle variabili non devono e non possono iniziare con un numero
let x = 10;

/*
 Ci dà errore
 let 1x = 20;

 Per ovviare posso fare così
 let _1x = 20;
*/

// Dichiarazioni che sono valide ↓
let _ = 10;
let $ = 20;
let _____x = 100;
let _12_$ = 200;

// Dichiarazioni non valide, qualsiasi simbolo che ha un significato all'interno del nostro programma o in javascript in generale per non creare conflitto ↓

/* 
let let = 10;
let if = 20;
let { = 30;
let ] = 24;
let + = 12;
let ) = 41;
let * = 12

, ; e via dicendo
*/

// Notazione camelCase
let firstName = "Anto";

// Notazione underscore
let first_name = "Nio";

// OCHO. Rispetta sempre la lingua del codice come accortezza, se il codice è scritto in inglese, è inutile che creo una variabile per esempio chiamata cognome invece posso utilizzare lastName
