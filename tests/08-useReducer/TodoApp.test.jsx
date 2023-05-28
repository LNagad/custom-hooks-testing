import { fireEvent, render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer';
import { useTodo } from '../../src/08-useReducer/useTodo';

jest.mock('../../src/08-useReducer/useTodo');

describe('Pruebas en <TodoApp />', () => { 

  const handleNewTodoMock = jest.fn();
  const handleDeleteTodoMock = jest.fn();
  const handleTogleTodoMock =jest.fn();

    
  useTodo.mockReturnValue({
    todos: [
      {id: 1, description: 'Todo #1', done: false},
      {id: 2, description: 'Todo #2', done: true},
    ],
    handleNewTodo: handleNewTodoMock, 
    handleDeleteTodo: handleDeleteTodoMock, 
    handleTogleTodo: handleTogleTodoMock,
    todoAll: 2,
    todoPending: 1
  });

  beforeEach( () => jest.clearAllMocks() );

  test('Debe de mostrar el componente correctamente', () => { 

    render( <TodoApp />);
    
    expect(screen.getByText('Todo #1')).toBeTruthy();
    expect(screen.getByText('Todo #2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();

  });

  test('Debe de llamar el handleNewTodo', () => { 
    
    render( <TodoApp />);

    const formInput = screen.getByLabelText('descriptionInput');
    const form = screen.getByLabelText('form');
    
    fireEvent.input( formInput, {target: {value: 'Pick up the clothes'}});
    fireEvent.submit(form);

    expect( handleNewTodoMock ).toHaveBeenCalled();

  });

  test('Debe de llamar el handleDeleteTodo', () => { 
  
    render( <TodoApp />);

    const secondListItem = screen.getAllByRole('listitem')[1];
    const buttonElement = secondListItem.querySelector('button');

    fireEvent.click(buttonElement);

    expect( handleDeleteTodoMock ).toHaveBeenCalledWith(2);

  });

  test('Debe de llamar el handleTogleTodo', () => { 
    
    render( <TodoApp />);
    
    const secondListItem = screen.getAllByLabelText('span')[1];
    
    fireEvent.click( secondListItem );

    expect( handleTogleTodoMock ).toHaveBeenCalledWith(2);
    
  });


});