/*
Ejercicios: Operadores
*/

// 1. Crea una variable para cada operación aritmética
let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 6 * 7;
let division = 20 / 4;
let modulo = 15 % 6;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let asignacionSuma = suma;
asignacionSuma += 2;
let asignacionResta = resta;
asignacionResta -= 1;
let asignacionMultiplicacion = multiplicacion;
asignacionMultiplicacion *= 2;
let asignacionDivision = division;
asignacionDivision /= 2;
let asignacionModulo = modulo;
asignacionModulo %= 2;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(suma > resta);
console.log(multiplicacion >= division);
console.log(modulo == 1);
console.log(suma === 8);
console.log(resta != 5);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(suma < resta);
console.log(multiplicacion <= division);
console.log(modulo != 1);
console.log(suma === 9);
console.log(resta == 5);

// 5. Utiliza el operador lógico and
console.log(suma > 5 && multiplicacion > 30); 

// 6. Utiliza el operador lógico or
console.log(suma < 5 || multiplicacion > 30);

// 7. Combina ambos operadores lógicos
console.log((suma > 5 && multiplicacion > 30) || (resta < 10 || division < 5));

// 8. Añade alguna negación
console.log(!(suma < 5));
// 9. Utiliza el operador ternario
let resultado = suma > 5 ? "La suma es mayor que 5" : "La suma no es mayor que 5";
console.log(resultado);

// 10. Combina operadores aritméticos, de comparáción y lógicas
let resultadoComplejo = (suma + multiplicacion) > (resta * division) && modulo === 3 ? "El resultado es verdadero" : "El resultado es falso";