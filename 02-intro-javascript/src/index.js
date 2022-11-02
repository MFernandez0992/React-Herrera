/* Promesas -  

- Resolve se va a ejecutar cuando la promesa resulta exitosa
- Reject cuando la promesa falla o no se puede cumplir
*/

import { getHeroeById } from "./bases js/08-import-export";

 const promesa = new Promise( (resolve, reject) => {
   
    setTimeout(() => {
        // Cuando esta tarea termina, llama al resolve, este va a notificar a cualquier persona que esté escuchando el then, entonces el then se va a ejecutar
        resolve();

        /* Tarea - Importar el getHeroeById y mostrar por consola el heroe del id seleccionado */
        const heroe = getHeroeById(4);
        console.log(heroe);

        // console.log('2 segundos después')
    }, 2000)
});

promesa.then(() => {
    console.log('Then de la promesa')
});