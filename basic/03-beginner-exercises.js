// 1. Escribe un comentario en una línea

// Este es un comentario de una línea

// 2. Escribe un comentario en varias líneas

/* 
Este es un comentario
en varias líneas
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let texto = "Hola, JavaScript!";
let esVerdad = true;
let esFalso = false;
let nulo = null;
let indefinido = undefined;
let bigInt = 1234567890123456789012345678901234567890n;

// 4. Imprime por consola el valor de todas las variables
console.log(texto);
console.log(esVerdad);
console.log(esFalso);
console.log(nulo);
console.log(indefinido);
console.log(bigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof texto);
console.log(typeof esVerdad);
console.log(typeof esFalso);
console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof bigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
texto = "¡Adiós, JavaScript!";
esVerdad = false;
esFalso = true;
nulo = null;
indefinido = undefined;
bigInt = 9876543210987654321098765432101234567890n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
texto = 42;
esVerdad = "true";
esFalso = "false";

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const TEXTO = "¡Hola, JavaScript!";
const ES_VERDAD = true;
const ES_FALSO = false;
const NULO = null;
const INDEFINIDO = undefined;
const BIG_INT = 1234567890123456789012345678901234567890n; 

// 9. A continuación, modifica los valores de las constantes
TEXTO = "¡Adiós, JavaScript!"; 
ES_VERDAD = false;
ES_FALSO = true; 
NULO = null; 
INDEFINIDO = undefined; 
BIG_INT = 9876543210987654321098765432101234567890n; 
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
/* TEXTO = "¡Adiós, JavaScript!"; 
ES_VERDAD = false;
ES_FALSO = true; 
NULO = null; 
INDEFINIDO = undefined; 
BIG_INT = 9876543210987654321098765432101234567890n;