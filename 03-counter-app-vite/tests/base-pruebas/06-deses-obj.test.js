const { usContext } = require("../../src/base-pruebas/06-deses-obj");

describe('Pruebas sobre 06-deses-obj', () => { 
    
    test('06-deses-obj debería devolver un objeto', () => { 
        
        const clave = 'Test';
        const edad = '48';
        const lat = 14.1232;
        const lng = -12.3232;

        const context = usContext({clave, edad});
        console.log(context);

        expect( context ).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: lat,
                lng: lng
            }
        });

     })

 })