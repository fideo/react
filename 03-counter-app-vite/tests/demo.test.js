


test('Esta es una prueba que no debería fallar', () => {

  if ( 0 === 1 ) {
    throw new Error('No se puede dividir por cero');
  }

})