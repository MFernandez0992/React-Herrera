// Arrays con JS
const arreglo = [1, 2, 3, 4];

// Agregar un elemento al array con .push()
arreglo.push(10);

let arreglo2 = [...arreglo, 5];

// Método .map() - Crea un nuevo array con el resultado de la función, en este caso el doble de cada número
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);