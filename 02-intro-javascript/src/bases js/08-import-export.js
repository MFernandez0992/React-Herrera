/* Cuando hago una importación de una exportación por defecto, no debo colocarla entre llaves, si a la vez hago una exportación individual, esta si la coloco entre llaves */
import  heroes, {owners} from '../data/heroes';

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);

console.log(getHeroeById(2));

console.log(owners);

// Buscar todos los heroes por su marca utilizando Filter, porque Find solo devuelve el primer valor encontrado.
const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('Marvel'));