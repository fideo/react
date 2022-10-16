const { getImagen } = require("../../src/base-pruebas/11-async-await");

describe('Prueba en 11-async-await', () => {    
    
    try {
        test('getImagen esto debería devolver una url de la imagen', async() => { 
            
            const url = await getImagen();
            console.log(url);
            expect( typeof url ).toBe('string');
    
        });
    } catch (error) {
        test('getImagen debe devolver un error sino tenemos API key', async() => { 
            
            const resp = await getImagen();
            expect (resp).toBe('No se encontró la url de la imagen');
    
        });
    }

 });
