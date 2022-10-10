const { getHeroeById, getHeroesByOwner } = require("../../src/base-pruebas/08-imp-exp");

describe('Probar en 08-imp-exp', () => { 
  test('getHeroeById debe retornar un heroe por id', () => { 
    
    const id = 1;

    const heroeID = getHeroeById(id);
    console.log(heroeID);

    expect(heroeID).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
   });

   test('getHeroeById debe retornar un undefined', () => { 
    
    const id = 100;

    const heroeID = getHeroeById(id);
    console.log(heroeID);

    //expect(heroeID).toEqual(undefined);
    expect(heroeID).toBeFalsy(); // es otra forma de llamar a los undefined or null or false
   });


  //  Tarea:
  //  Debe de retornar un arreglo con los héroes de DC
  //  length === 3
  //  toEqual al arreglo filtrado

  //  debe de retornar un arreglo con los héroes de Marvel
  //  length === 2

  test('getHeroesByOwner debe retornar un arreglo con los héroes de DC', () => { 
    
    const heroe = 'Batman'

    const heroeByOwner = getHeroesByOwner();
    console.log(heroeByOwner);

   });

 });