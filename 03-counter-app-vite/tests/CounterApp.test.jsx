import { fireEvent, render, screen } from '@testing-library/react';
import { exact } from 'prop-types';
const { CounterApp } = require("../src/CounterApp");

describe('Pruebas en <CounterApp />', () => {
  
  const initialValue=100;

  test('Debe de hacer match con el snapshot', () => { 

    const { container } = render(<CounterApp value={initialValue}/>);
    expect( container ).toMatchSnapshot();

  });

  test('Debe de mostrar el valor inicial de 100 <CounterApp value={100}', () => { 
    render(<CounterApp value={initialValue} />);
    // //screen.debug();
    expect ( screen.getByText(100)).toBeTruthy();
    // expect ( screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');
  });

  test('Debe de incrementar con el botón +1', () => { 
    
    render(<CounterApp value={initialValue}/>);
    fireEvent.click( screen.getByText('+1') )
    expect( screen.getByText('101') ).toBeTruthy();

   });

   test('Debe de decrementar con el botón -1', () => { 
    
    render(<CounterApp value={initialValue}/>);
    fireEvent.click( screen.getByText('-1') )
    expect( screen.getByText('99') ).toBeTruthy();

   });

   test('Debe de reiniciar con el botón Reset', () => { 
    
    render(<CounterApp value={initialValue}/>);
    //este lo hice yo
    // fireEvent.click( screen.getByText('Reset') )
    // expect( screen.getByText('100') ).toBeTruthy();
    // fin del que hice yo

    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
    expect(screen.getByText(100)).toBeTruthy(); 

   });

});