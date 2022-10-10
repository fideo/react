const { string } = require("prop-types");
const { retornaArreglo } = require("../../src/base-pruebas/07-deses-arr");


describe('Pruebas en 07-deses-arr', () => { 
    test('debe de retornar un string y un número', () => { 
        
        const [letter, numbers] = retornaArreglo();
        console.log(letter);
        console.log(numbers);

        //expect(letter).toBe('ABC'); // esto es para cuando recibimos extrictamente ABC
        //expect(numbers).toBe(123); // esto es para cuando recibimos extrictamente 123

        expect(typeof letter).toBe('string'); //esto es para chequear que recibe tipo de dato String
        expect(typeof numbers).toBe('number'); //esto es para chequear que recibe tipo de dato Number

        expect(letter).toEqual(expect.any(String)); //esto es para chequear que letter venga con cualquier valor tipo String
        expect(numbers).toEqual(expect.any(Number)); //esto es para chequear que numbers venga con cualquier valor tipo Number



     });
 });