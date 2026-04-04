// Funciones

// Simple

function myFunc() {
  console.log("¡Hola, función!");
}

for (let i = 0; i < 5; i++) {
  myFunc();
}

// Con parámetros

function myFuncWithParams(name) {
  console.log(`¡Hola, ${name}!`);
}

myFuncWithParams("Elmer");
myFuncWithParams("Coronel");

// Funciones anónimas

const myFunc2 = function (name) {
  console.log(`¡Hola, ${name}!`);
};

myFunc2("Elmer");

// Arrow functions

const myFunc3 = (name) => {
  console.log(`¡Hola, ${name}!`);
};

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`);

myFunc3("Elmer");
myFunc4("Coronel");

// Parámetros

function sum(a, b) {
  console.log(a + b);
}

sum(5, 10);
sum(5);
sum();

function defaultSum(a = 0, b = 0) {
  console.log(a + b);
}

// Por defecto

defaultSum();
defaultSum(5);
defaultSum(5, 10);
defaultSum(undefined, 5);

// Retorno de valores

function mult(a, b) {
  return a * b;
}

let result = mult(5, 10);
console.log(result);

// Funciones anidadas

function extern() {
  console.log("Función externa");
  function intern() {
    console.log("Función interna");
  }
  intern();
}

extern();
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
  func(param);
}

applyFunc(myFunc4, "función de orden superior");

// forEach

const myArray = [1, 2, 3, 4];

const mySet = new Set([
  "Elmer",
  "Coronel",
  "elmercoronel",
  37,
  true,
  "elmercoronel@gmail.com",
]);

const myMap = new Map([
  ["name", "Elmer"],
  ["email", "elmercoronel@gmail.com"],
  ["age", 37],
]);

myArray.forEach(function (value) {
  console.log(value);
});

myArray.forEach((value) => console.log(value));

mySet.forEach((value) => console.log(value));

myMap.forEach((value) => console.log(value));
