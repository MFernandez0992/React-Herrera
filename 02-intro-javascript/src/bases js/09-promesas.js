/* Promesas -  

- Resolve se va a ejecutar cuando la promesa resulta exitosa
- Reject cuando la promesa falla o no se puede cumplir
*/

import { getHeroeById } from "./bases js/08-import-export";

const promesa = new Promise( (resolve, reject) => {
   
    setTimeout(() => {
        
        /* Tarea - Importar el getHeroeById y mostrar por consola el heroe del id seleccionado */
        const heroe = getHeroeById(4);
        
        // Cuando esta tarea termina, llama al resolve, este va a notificar a cualquier persona que esté escuchando el then, entonces el then se va a ejecutar, puedo pasarle los valores al then mediante el resolve
        resolve(heroe);
        reject('No se pudo encontrar el héroe');
        // console.log('2 segundos después')
    }, 2000)
});

promesa.then((heroe) => {
    console.log(heroe)
});

//.catch(err => console.warn(err));

const getHeroeByIDAsync = (id) => {
    return new Promise ( (resolve, reject) => {
   
        setTimeout(() => {
            
            /* Tarea - Importar el getHeroeById y mostrar por consola el heroe del id seleccionado */
            const heroe = getHeroeById(id);
            
            if(heroe){
                resolve(heroe)
            }else{
                reject('No se encontró el héroe');
            }
            // Cuando esta tarea termina, llama al resolve, este va a notificar a cualquier persona que esté escuchando el then, entonces el then se va a ejecutar, puedo pasarle los valores al then mediante el resolve
            resolve(heroe);
            // console.log('2 segundos después')

        }, 2000)
    });
}

getHeroeByIDAsync(3)
.then(console.log())
.catch(err => console.warn(err));