import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en <HomePage />', () => { 

  const user = { id: 1, name: 'Maycol'};

  test('Debe de mostrar el componente sin el usuario', () => { 
    
    render( 
      <UserContext.Provider value={ { user: null } }>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect( preTag.innerHTML ).toBe('null');

  });
  
  test('Debe de mostrar el componente CON el usuario', () => { 
    
    render( 
      <UserContext.Provider value={ { user } }>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    
    expect( preTag.textContent ).toContain( user.name );
    expect( preTag.textContent ).toContain( user.id.toString() );

  });

});