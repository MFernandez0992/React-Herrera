import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    
    test('getUser debe retornar un objeto', () => {
        
     const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
     };
     
     const user = getUser();
     console.log(user);

     // Cuando se evalúa un objeto se debe utilizar toStrictEqual o toEqual
     expect( testUser ).toStrictEqual( user );
    });


    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Matías';

        const testUserActivo = {
            uid: 'ABC567',
            username: nombre
        }

        const userActivo = getUsuarioActivo('Matías');

        expect( testUserActivo ).toStrictEqual( userActivo );
    })
})