/* Objetos Literales */

const persona = {
    nombre: 'Titán',
    edad: 6,
    raza: 'Cimarrón',
    direccion: {
        calle: '8 de Octubre',
        numero: 3524
    }
};

console.log(persona.nombre);
console.log(persona.direccion.calle);

// Clonar un objeto utilizando Spread Operator
const persona2 = {...persona};

persona2.edad = 8;

console.log(persona);
console.log(persona2);