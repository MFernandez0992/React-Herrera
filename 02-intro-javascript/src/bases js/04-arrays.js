// Arrays
const arreglo = [1, 2, 3, 4];

let arreglo2 = [...arreglo, 5];


/* Método Map - El método .map crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos */
const arreglo3 = arreglo2.map( number => number * 2); // Devuelve en un nuevo arreglo(arreglo3) los números del arreglo 2 multiplicados por 2.

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);