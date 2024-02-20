import { getUser } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => { 
    
    test('getUser debe de retornar un objeto con los valores esperados', () => { 
        
        const testUser = {
            uid: '123',
            username: 'Titan'
        }

        const user = getUser()

        expect(user).toEqual(testUser)
     })
})
