//Ejercicio1 usar filter 
array = [1, 8, 4, 7, 12];
console.log("Método Filter");
const mayor = array.filter(n => n > 5);
mayor.forEach((element) => console.log(element));

//Ejercicio2 usar slice
console.log("Método Slice");
let frutas = ["naranja", "platano", "manzana", "fresa", "kiwi"];
console.log(frutas.slice(2, 4));

//Ejercicio3 usar map
console.log("Método Map");
let num = [1,2,3,4,5];
console.log(num.map((element, index) => " " + index + " : " + (element +10) ));

//Ejercicio4 usar concat
console.log("Método Concat");
let array1 = ['H', 'I', 'J'];
let array2 = ['K', 'L', 'M'];
console.log(array1.concat(array2));

//Ejercicio5 usar 
console.log("Método Includes");
let paises = ['México', 'USA', 'Francia'];
console.log(paises.includes('Francia'));




