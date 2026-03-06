// Tipos primitivos

// Cadenas de texto (String)
let string = "Esto es un string";
let alias = "Esto es un alias de string";
let email = `Esto es un email: `;

// Números (Number)
let age = 42; //enteros
let heigth = 1.75; //Decimales

// Booleanos (Boolean)
let isAdult = true;
let isMinor = false;

// undefined (Indefinido)
let undefinedVariable;
console.log(undefinedVariable); //undefined

// null (Nulo)
let nullVariable = null;
console.log(nullVariable); //null

// Symbol (Símbolo)
let symbol1 = Symbol("symbol1");
let symbol2 = Symbol("symbol2");

// BigInt (Número grande)
let myBigInt = 900719925474099142342342342523523523n; //n al final para indicar que es un BigInt
let anotherBigInt = BigInt("900719925474099142342342342523523523"); //Otra forma de crear un BigInt

// Mostrar los tipos de datos
console.log(typeof string); //string
console.log(typeof age); //number
console.log(typeof isAdult); //boolean
console.log(typeof undefinedVariable); //undefined
console.log(typeof nullVariable); //object (esto es un error histórico de JavaScript, null debería ser null)
console.log(typeof symbol1); //symbol
console.log(typeof myBigInt); //bigint
console.log(typeof anotherBigInt); //bigint