// Template Strings - Es una nueva forma de escribir strings de forma más sencilla y legible.

const nombre = 'Matías';
const apellido = 'Fernández';

const nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

const nombreCompletoTemplateStrings = `Mi nombre es ${nombre} ${apellido}`;
console.log(nombreCompletoTemplateStrings);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);