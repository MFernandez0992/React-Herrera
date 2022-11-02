export const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];


/* Existen varias formas de exportar, todas ellas son válidas */
// Exportación individual de owners
// export const owners = ['DC', 'Marvel'];

// Exportación por defecto de heroes
//export default heroes;
const owners = ['DC', 'Marvel'];

// Exportación anidada (defecto y normal)
export{
    heroes as default,
    owners
};