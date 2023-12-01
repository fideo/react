import { act, renderHook } from "@testing-library/react";
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter', () => { 
  
  test('debe de retornar los valores por defecto', () => { 

    const { result } = renderHook( () => useCounter() );  
    // console.log(result)
    const {counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(1);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));

  });

  test('debe de generar el counter con el valor de 100', () => {
    const { result } = renderHook( () => useCounter(100) );  

    expect(result.current.counter).toBe(100);
  })

  test('debe de incrementar el contador', () => { 

    const { result } = renderHook( () => useCounter(1) );  
    const {counter, increment} = result.current;

    act(()=> {
      increment();
      increment(2);
    })

    expect(result.current.counter).toBe(3)

  })

  test('debe de decrementar el contador', () => { 

    const { result } = renderHook( () => useCounter(1) );  
    const {counter, decrement} = result.current;

    act(()=> {
      decrement();
    })

    expect(result.current.counter).toBe(0)

  })

  test('debe realizr el reset del contador', () => { 

    const { result } = renderHook( () => useCounter(1) );  
    const {counter, increment, reset} = result.current;

    act(()=> {
      increment();
      reset();
    })

    expect(result.current.counter).toBe(1)

  })

 })