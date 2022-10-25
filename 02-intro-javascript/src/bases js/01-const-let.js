// Variables y Constantes
const nombre = 'Matías';
const apellido = 'Fernández';

let edad = 29;
edad = 30;

console.log(`Me llamo ${nombre} ${apellido} y tengo ${edad}`);

/* Utilizando let se respeta el scope de las variables, la variable con let definida dentro de un if solo vivirá dentor del mismo */

if( true ){
    let edad = 31;
    console.log(`Dentro del if se respeta el scope de la variable y ${edad} será distinta a la variable edad que se encuentra fuera del if.`);
}

console.log(edad);