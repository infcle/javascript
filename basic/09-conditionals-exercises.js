/*
Ejercicios: Condicionales
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Juan";
if (nombre) {
    console.log(nombre);
}


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "admin";
let contraseña = "123456";
if (usuario === "admin" && contraseña === "123456") {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 5;
if (numero > 0) {
    console.log("El número es positivo");
} else if (numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 20;
if (edad >= 18) {
    console.log("Puede votar");
} else {
    console.log("No puede votar");
    console.log(`Le faltan ${18 - edad} años para poder votar`);
}


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
let edad = 20;
let categoria = edad >= 18 ? "adulto" : "menor";
console.log(categoria);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "marzo";
if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
    console.log("Estamos en invierno");
} else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
    console.log("Estamos en primavera");
} else if (mes === "junio" || mes === "julio" || mes === "agosto") {
    console.log("Estamos en verano");
} else {
    console.log("Estamos en otoño");
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior switch
let mes = "febrero";
switch (mes) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log("El mes tiene 31 días");
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        console.log("El mes tiene 30 días");
        break;
    case "febrero":
        console.log("El mes tiene 28 días (o 29 en años bisiestos)");
        break;
    default:
        console.log("Mes no válido");
}


// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "español";
switch (idioma) {
    case "español":
        console.log("¡Hola!");
        break;
    case "inglés":
        console.log("Hello!");
        break;
    case "francés":
        console.log("Bonjour!");
        break;
    default:
        console.log("Idioma no soportado");
}


// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes = "marzo";
switch (mes) {
    case "diciembre":
    case "enero":
    case "febrero":
        console.log("Estamos en invierno");
        break;
    case "marzo":
    case "abril":
    case "mayo":
        console.log("Estamos en primavera");
        break;
    case "junio":
    case "julio":
    case "agosto":
        console.log("Estamos en verano");
        break;
    default:
        console.log("Estamos en otoño");
}


// 10. Usa un switch para hacer de nuevo el ejercicio 7
function diasDelMes(mes) {
  let dias;

  switch (mes) {
    case 1: // Enero
    case 3: // Marzo
    case 5: // Mayo
    case 7: // Julio
    case 8: // Agosto
    case 10: // Octubre
    case 12: // Diciembre
      dias = 31;
      break;

    case 4: // Abril
    case 6: // Junio
    case 9: // Septiembre
    case 11: // Noviembre
      dias = 30;
      break;

    case 2: // Febrero
      dias = 28; //ajustar si es biciesto 
      break;

    default:
      dias = "Mes inválido";
  }

  return dias;
}
console.log(diasDelMes(2)); // Output: 28