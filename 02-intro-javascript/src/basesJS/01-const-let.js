// Variables y Constantes

const nombre = 'Matías';
let edad = 28;
edad = 29;

console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);

// Scope de las variables Let - Solo viven dentro del ámbito dónde se declaran, en este caso dentro del IF aunque fuera de este también exista dicha variable pero se tratan como distintas aunque tengan el mismo nombre.
if (true){
    const nombre = 'Leonardo';
    let edad = 21;
    console.log(edad, nombre);
}

console.log(nombre);
console.log(edad);