import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en <TodoItem />', () => {
  const todo = {
    id: 1,
    description: 'Demo Todo',
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onTogleTodoMock = jest.fn();

  //? Si vamos a llamar los mocks en varias funciones
  //? Es conveniente limpiar todas las instancias de estos
  //? mocks usando el beforeEach (before each test)
  beforeEach(() => jest.clearAllMocks());

  test('Debe de mostrar el todo pendiente de completas', () => {
    
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onTogleTodo={onTogleTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );

    const spanElement = screen.getByLabelText('span');
    expect( spanElement.className ).toContain('align-self-center');
    expect( spanElement.className ).not.toContain('text-decoration-line-through');

  });

  
  test('Debe de mostrar el Todo completado', () => {
    todo.done = true;
    
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onTogleTodo={onTogleTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );

    const spanElement = screen.getByLabelText('span');
    expect( spanElement.className ).toContain('text-decoration-line-through');
    
  });

  test('El span debe llamar el onTogleTodo cuando se hace click', () => {
    
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onTogleTodo={onTogleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    fireEvent.click( spanElement );

    expect( onTogleTodoMock ).toHaveBeenCalledWith( todo.id );
    
  });

  test('El boton debe llamar el onDeleteTodo cuando se hace click', () => {
    
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onTogleTodo={onTogleTodoMock}
      />
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click( buttonElement );

    expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    
  });
});
