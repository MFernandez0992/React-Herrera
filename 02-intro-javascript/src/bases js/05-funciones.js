// Funciones
const saludar = function(nombre){
    return `Hola ${nombre}`;
}

// Arrow Function

const saludar2 = nombre2 => `Hola ${nombre2}`

console.log(saludar('Matías'));
console.log(saludar2('Titán'));

const getUser = () => {
    return{
        uid: 'ABC123',
        username: 'mfernandez'
    }
}

const user = getUser();
console.log(user);


/* Tarea
1. Transformar a Arrow Function
2. Tiene que retornar un objeto implícito
3. Pruebas */

/* function getUsuarioActivo(nombre){
    return{
        uid: 'ABC789',
        username: nombre
    }
}; */

const getUserActivo = nombre => {
    return{
        uid: 'ABC789',
        username: nombre
    }
}
const usuarioActivo = getUserActivo('Titán');
console.log(usuarioActivo);