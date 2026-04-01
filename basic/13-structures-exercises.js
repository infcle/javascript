/*
Ejercicios: Estructuras
*/

// 1. Crea un array que almacene cinco animales
let animales = ["perro", "gato", "pájaro", "pez", "conejo"];

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("tigre");
animales.push("elefante");

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1);  
// 4. Crea un set que almacene cinco libros
let libros = new Set(["El Quijote", "Cien años de soledad", "La sombra del viento", "El nombre de la rosa", "Don Juan Tenorio"]);

// 5. Añade dos más. Uno de ellos repetido
libros.add("El Quijote");
libros.add("Cien años de soledad");

// 6. Elimina uno concreto a tu elección
libros.delete("El nombre de la rosa");

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map();
meses.set(1, "Enero");
meses.set(2, "Febrero");
meses.set(3, "Marzo");
meses.set(4, "Abril");
meses.set(5, "Mayo");
meses.set(6, "Junio");
meses.set(7, "Julio");
meses.set(8, "Agosto");
meses.set(9, "Septiembre");
meses.set(10, "Octubre");
meses.set(11, "Noviembre");
meses.set(12, "Diciembre");


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
    console.log(meses.get(5));
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", ["junio", "julio", "agosto"]);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let colores = ["rojo", "verde", "azul"];
let setColores = new Set(colores);
let mapaColores = new Map();
mapaColores.set("colores", setColores);
