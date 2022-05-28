// Funciones - Son bloques de código que ejecutarán acciones y pueden ser reutilizables

const saludar = function (nombre){
    return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar('Matías Fernández'));
console.log(saludar2('Matías Fernández'));
console.log(saludar3('Matías Fernández'));
console.log(saludar4('Matías Fernández'));

// Tarea
function getUsuarioActivo(nombre){
    return {
        uid: 'ABC123',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Matías');
console.log(usuarioActivo);

// 1. Transformar a una Arrow Function
const usuarioActivo2 = (nombre) => ({
    uid: 'ABC123',
    username: nombre
});
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
console.log(usuarioActivo2('Titán'));