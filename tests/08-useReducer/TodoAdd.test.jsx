import { fireEvent, render, screen } from '@testing-library/react';
import { TodoAdd } from '../../src/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', () => { 
  
  const onNewTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('Debe de mostrar el description inicial', () => { 

    render( <TodoAdd onNewTodo={ onNewTodoMock } />);

    const inputElement = screen.getByLabelText('descriptionInput');
    expect( inputElement.value ).toBe('');
  });

  test('Debe de cambiar el input onChange', () => { 

    render( <TodoAdd onNewTodo={ onNewTodoMock } />);

    const inputElement = screen.getByLabelText('descriptionInput');

    fireEvent.input(inputElement, { target: { value: '1234' } });

    expect( inputElement.value ).toBe('1234');
  });

  test('Debe de llamar la funcion onNewTodo', () => { 
    
    render( <TodoAdd onNewTodo={ onNewTodoMock } />);

    const inputElement = screen.getByLabelText('descriptionInput');

    fireEvent.input(inputElement, {target: {value: '12345'}});
    fireEvent.submit( screen.getByRole('button'));
    
    expect( onNewTodoMock ).toHaveBeenCalled();
  });

});