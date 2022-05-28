// Desestructuración

const persona = {
    nombre: 'Titán',
    edad: 7,
    clave: 'Matías'
}

const {nombre, edad, clave} = persona;

console.log(persona);
console.log(persona.nombre);
console.log(nombre);

const retornaPersona = ({ nombre, clave, edad, rango = 'Perro'}) => {
    console.log(nombre, edad, rango);

    return{
        nombreClave: clave,
        anios: edad
    }
}

retornaPersona(persona);

const { nombreClave, anios} = useContext(persona);
console.log(nombreClave, anios);