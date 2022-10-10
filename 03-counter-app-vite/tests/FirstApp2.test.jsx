import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp2 />', () => { 

  const title = 'Hola, soy Goku';
  const subtitle = 'Hola soy un subtitulo';

  test('debe de hacer match con el snapshot', () => { 
    
      const {container} = render( <FirstApp title={title} />);
      expect( container ).toMatchSnapshot();

   });

  test('Debe de mostrar el mensaje "Hola, Soy Goku"', () => { 
    
      render(<FirstApp title={title} />);
      //screen.debug(); // para ver el objeto;
      expect(screen.getByText(title)).toBeTruthy();
    
   });

   test('debe de mostrar el titulo en h1', () => { 
    
      render(<FirstApp title={title} />);

      expect( screen.getByRole('heading', { level: 1 } ).innerHTML ).toContain(title);

    });


    test('debe de mostrar el subtitulo enviado por props', () => { 
    
      render(<FirstApp title={title} subtitle={subtitle} />);

      expect( screen.getAllByText(subtitle).length ).toBe(2);

    });


});