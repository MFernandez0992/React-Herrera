/* Desestructuración de objetos */
const personajes = ['Goku', 'Vegeta', 'Trunks'];

// En la desestructuración de arreglos se debe respetar las posiciones, por lo que si NO deseo extraer un valor anterior al que quiero, debo dejar el espacio en blanco separado con coma
const [ , , Trunks ] = personajes;

console.log(Trunks);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(retornaArreglo());
console.log(letras, numeros);

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. El segundo se llamará setNombre
const estado = ( valor ) => {
    return[ valor, () => {console.log('Hola Mundo')}];
}

const [ nombre, setNombre ] = estado('Matías');

console.log(nombre);
setNombre();