// Con Jest se puede ejecutar los test, con el comando npm run test ejecuto las pruebas

describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no debe de fallar', () => {
        // 1. Inicialización
        const message1 = 'Hola Mundo ';
    
        // 2. Estímulo
        const message2 = message1.trim();
    
        // 3. Observar el comportamiento... esperado
    
        // Utilizo expect() para asignarla qué espero del código, toBe() lo utilizo para comparar si message1 = a message2
        expect( message1 ).toBe( message2 );
    
        
    })
})