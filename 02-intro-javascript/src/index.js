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

const getUser = () => ({
    uid: 'ABC123',
    username: 'MatuBolso'
});

console.log(getUser());