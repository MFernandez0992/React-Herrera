/* Operador condicional ternario */

const activo = false;
let mensaje = '';

/* if(activo){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
} */

const mensajeTernario = (activo) ? 'Activo' : 'inactivo';
console.log(mensajeTernario);

/* Operador ternario abreviado utilizando AND solamente si necesitamos que devuelva el mensaje si es true */

const mensajeTernarioAbreviado = activo && 'Activo';
console.log(mensajeTernarioAbreviado); // Devuelve el mensaje

const mensajeTernarioAbreviadoFalse = !activo && 'Activo'; // Devuelve false solamente