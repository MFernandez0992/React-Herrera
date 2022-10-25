/* Template Strings */
const nombre = 'Matías';
const apellido = 'Fernández';

const nombreCompleto = `${nombre} ${apellido}`;

function getSaludo(nombre){
    return `Hola ${nombre}`
}

console.log(`Este es un texto: ${getSaludo('Matías')}`);