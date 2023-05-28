import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useCounter, useFetch } from '../../src/hooks';


jest.mock('../../src/hooks/useCounter');
jest.mock('../../src/hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks />', () => { 

  const mockIncrement = jest.fn();
    
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  });

  beforeEach( () => {
    jest.clearAllMocks();
  });
    

  test('Debe de mostrar el componente por defecto', () => { 
    
    useFetch.mockReturnValue({
      data: null, 
      isLoading: true, 
      hasError: null
    });

    render( <MultipleCustomHooks />);

    expect( screen.getByText('Loading...') ).toBeTruthy();
    expect( screen.getByText('Pokemon API') ).toBeTruthy();

    const nextButton = screen.getByRole('button', {name: 'nextBtn'});
    expect( nextButton.disabled ).toBeTruthy();
    // screen.debug();
  });


  test('Debe de mostrar un pokemon', () => { 

    const ob = {
      name: 'Pikachu',
      order: '123',
      abilities: [{name: 'Impact trueno'}, {name: 'Ataque rapido'}],
      sprites:  ['imagen.jpg'],
    };
    
    useFetch.mockReturnValue({
      data: ob, 
      isLoading: false, 
      hasError: null
    });

    render( <MultipleCustomHooks />);

    expect( screen.getByText(ob.name) ).toBeTruthy();
    expect( screen.getByText(ob.abilities[0].name) ).toBeTruthy();
    expect( screen.getByText(ob.abilities[1].name) ).toBeTruthy();
    
    const nextButton = screen.getByRole('button', {name: 'nextBtn'});
    expect( nextButton.disabled ).toBeFalsy();
    screen.debug();
  });

  test('Debe llamar la funcion de incrementar', () => { 

    const ob = {
      name: 'Pikachu',
      order: '123',
      abilities: [{name: 'Impact trueno'}, {name: 'Ataque rapido'}],
      sprites:  ['imagen.jpg'],
    };

    
    useFetch.mockReturnValue({
      data: ob, 
      isLoading: false, 
      hasError: null
    });
    

    render( <MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', {name: 'nextBtn'});
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
    screen.debug();
  });

});