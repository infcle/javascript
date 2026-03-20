// Set

// Declaración

let mySet = new Set();

console.log(mySet);

// Inicialización

mySet = new Set(["Elmer", "Coronel", "infcle", 37, true, "infcle@gmail.com"]);

console.log(mySet);

// Métodos comunes

// add y delete

mySet.add("https://infcle.dev");

console.log(mySet);

mySet.delete("https://infcle.dev");

console.log(mySet);

console.log(mySet.delete("Elmer"));
console.log(mySet.delete(4));

console.log(mySet);

// has

console.log(mySet.has("infcle"));
console.log(mySet.has("Elmer"));

// size

console.log(mySet.size);

// Convertir un set a array
let myArray = Array.from(mySet);
console.log(myArray);

// Convertir un array a set

mySet = new Set(myArray);
console.log(mySet);

// No admite duplicados

mySet.add("infcle@gmail.com");
mySet.add("infcle@gmail.com");
mySet.add("infcle@gmail.com");
mySet.add("Infcle@gmail.com");
console.log(mySet);
