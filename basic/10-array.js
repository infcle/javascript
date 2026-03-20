// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Elmer", "Coronel", "infcle", 37, true]
myArray2 = new Array("Elmer", "Coronel", "infcle", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Elmer"
// myArray2[0] = "Elmer"
myArray2[1] = "infcle"
myArray2[4] = "inf"

console.log(myArray2)

myArray = []
myArray[2] = "Elmer"
// myArray[0] = "infcle"
myArray[1] = "infcle"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Elmer")
myArray.push("Coronel")
myArray.push("infcle")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Elmer", "Coronel")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["Elmer", "Coronel", "infcle", 37, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Elmer", "Coronel", "infcle", 37, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)