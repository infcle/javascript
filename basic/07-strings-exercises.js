/*
Ejercicios: Strings
*/

// 1. Concatena dos cadenas de texto
let cadena1 = "Hola";
let cadena2 = "JavaScript";
let cadenaConcatenada = cadena1 + " " + cadena2;

// 2. Muestra la longitud de una cadena de texto
console.log(cadenaConcatenada.length);

// 3. Muestra el primer y último carácter de un string
console.log(cadenaConcatenada[0]);
console.log(cadenaConcatenada[cadenaConcatenada.length - 1]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadenaConcatenada.toUpperCase());
console.log(cadenaConcatenada.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let cadenaMultilinea = "Esta es una cadena de texto\nen varias líneas";
console.log(cadenaMultilinea);
// 6. Interpola el valor de una variable en un string
let nombre = "Alice";
let saludo = `¡Hola, ${nombre}!`;
console.log(saludo);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadenaConGuiones = cadenaConcatenada.replace(/ /g, "-");
console.log(cadenaConGuiones);

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let contienePalabra = cadenaConcatenada.includes("JavaScript");
console.log(contienePalabra);

// 9. Comprueba si dos strings son iguales
let string1 = "Hola";
let string2 = "Hola";
let sonIguales = string1 === string2;
console.log(sonIguales);

// 10. Comprueba si dos strings tienen la misma longitud
let mismaLongitud = string1.length === string2.length;
console.log(mismaLongitud);
