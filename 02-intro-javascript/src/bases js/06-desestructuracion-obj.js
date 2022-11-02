/* Desestructuración de objetos */
const persona = {
    nombre: 'Matías',
    edad: 30,
    profesion: 'Desarrollador',
    clave: 'Titán'
}

// Puedo asignarme otro nombre a la variable con variable:nombreNuevo
const { nombre, edad:edadPersona, profesionPersona } = persona;

console.log(`Mi nombre es ${nombre} tengo ${edadPersona} y soy ${profesionPersona}`);

// Desestructuración en el argumento de las funciones
const usuario = ({clave, nombre, edad, rango = 'Senior'}) =>{
    console.log(nombre, edad, rango);

    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 243.432,
            lng: 32623.32
        }
    }
}

const avenger = usuario(persona);

// Desestructuración de un objeto anidado, al objeto le asigno una desestructuración con ':' y dentro de los valores a extrar
const { nombreClave, anios, latlng, latlng:{lat, lng} } = usuario(persona);

console.log(nombreClave, anios);
console.log(latlng);
console.log(lat);
console.log(lng);