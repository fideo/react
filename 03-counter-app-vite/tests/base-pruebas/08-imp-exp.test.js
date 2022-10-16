const { getHeroeById, getHeroesByOwner } = require("../../src/base-pruebas/08-imp-exp");
const { default: heroes } = require("../../src/data/heroes");

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
    
    const owner = 'DC';

    const heroeByOwner = getHeroesByOwner(owner);
    //heroes.filter((heroe) => heroe.owner === owner);
    //console.log(heroeByOwner);
    //console.log(getHeroesByOwner(owner).length);
    
    //expect(heroeByOwner.length).toEqual(getHeroesByOwner(owner).length); // Yo lo hice así
    expect(heroeByOwner.length).toEqual(3); // el profesor lo hizo así.

    //esta es la opción que se me ocurrió a mi y al profesor; esto está hardcodeado
    expect(heroeByOwner).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]);

    //esta opción es la correcta ya que si los valores de data/heroes.js cambian no rompe mi test
    expect(heroeByOwner).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));


   });

  test('getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel', () => { 
    
    const owner = 'Marvel'

    const heroeByOwner = getHeroesByOwner(owner);
    //heroes.filter((heroe) => heroe.owner === owner);
    //console.log(heroeByOwner);
    //console.log(getHeroesByOwner(owner).length);
    
    //expect(heroeByOwner.length).toEqual(getHeroesByOwner(owner).length);
    expect(heroeByOwner.length).toEqual(2);

    //esta es la opción que se me ocurrió a mi y al profesor; esto está hardcodeado
    expect(heroeByOwner).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' }
    ]);

    //esta opción es la correcta ya que si los valores de data/heroes.js cambian no rompe mi test
    expect(heroeByOwner).toEqual(heroes.filter((heroe)=>heroe.owner===owner));
  
   });

 });