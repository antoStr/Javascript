// Undefined si riferisce all'assenza di un valore e viene prodotto automaticamente quando non è stato assegnato alcun valore, potrebbe essere anche assegnato da noi ma sarebbe ridondante perchè appunto non avrebbe molto senso. Inoltre è il valore di defualt di return delle funzioni che non restituiscono alcun valore.

let x;
console.log(x); // undefined

let arr1 = [10, 20, 30, 40, 50];
console.log(arr1[5]); // undefined

let y = 10;
y = undefined;
console.log(y); // undefined

function sayHello() {
  console.log("Ciao!");
}

let obj1 = {
  x: 10,
  y: 20,
};

console.log(obj1.z); // undefined

sayHello();
const res = sayHello();
console.log(res); // undefined perchè non ci restituisce nulla la funzione

// a differenza di undefined, null si riferisce all'assenza intenzionale di un valore o oggetto

let z = null; // null
console.log(z);

console.log(null == undefined);
console.log(null === undefined);

console.log(typeof undefined);
console.log(typeof null);
