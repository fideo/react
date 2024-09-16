import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('pruebas en todoReducer', () => {

  const initialState = [{
    id: 1,
    decription: 'Demo Todo',
    done: false,
  }]

  test('debe de regrear el estado inicial', () => {
    const newState = todoReducer( initialState, {});
    expect( newState ).toBe( initialState );
  });

  test('debe de agregar un todo', ()=>{

    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Nuevo todo #2',
        done: false,
      }
    };

    const newState = todoReducer( initialState, action);
    expect( newState.length ).toBe( 2 );
    expect( newState ).toContain( action.payload );

  });

  test('debe de eliminar un todo', () => {
    
  });

  test('debe de realizar el Toogle del todo', () => {
    
  });

})
