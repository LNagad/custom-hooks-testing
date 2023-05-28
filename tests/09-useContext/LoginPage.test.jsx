import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';




describe('Pruebas en <LoginPage />', () => { 
  

  test('Debe de mostrar el componente sin el usuario', () => { 
    
    render( 
      <UserContext.Provider value={ {user: null} }>
        <LoginPage />
      
      </UserContext.Provider>
    );

    expect( screen.getByLabelText('pre').innerHTML ).toBe('null');

  });


  test('Debe de llamar el setUser cuando se hace click en el boton', () => { 

    const setUserMock = jest.fn();
    
    render( 
      <UserContext.Provider value={ {user: null, setUser: setUserMock} }>
        <LoginPage />
      
      </UserContext.Provider>
    );


    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    expect( setUserMock).toHaveBeenCalledWith({id: 123, name: 'Maycol', gmail: 'g@gmail.com'});
    screen.debug();

  });

});