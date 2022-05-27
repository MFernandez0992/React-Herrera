// Objetos Literales - Es una colección de llave - valor que describe un objeto

const persona = {
    nombre: 'Matías',
    apellido: 'Fernández',
    edad: 29,
    domicilio: {
        ciudad: 'Parque Carrasco',
        pais: 'Uruguay',
        zip: 15001
    }
};

console.log(persona);
console.table(persona);
console.log(persona.apellido);

persona.nombre = 'Leonardo';

// Spread Operator - Se utiliza para copiar un array u objeto sin modificar el original
const persona2 = {...persona};
persona2.nombre = 'Titán';
console.log(persona2);