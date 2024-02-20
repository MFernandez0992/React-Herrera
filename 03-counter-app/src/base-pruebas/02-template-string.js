

export function getSaludo( name ) {
    return 'Hola ' + name;
}

const name = 'Matías'

console.log( `Este es un texto: ${ getSaludo( name ) }  ` );