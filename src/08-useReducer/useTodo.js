import { useEffect, useReducer } from 'react';
import { showNotification } from './index';

const init = () => {
  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : [];
};
  

export const useTodo = ( todoReducer ) => {
    
  const [todos, dispatch] = useReducer(todoReducer, [], init);
    
  const todosPending = todos.filter(p => !p.done ).length;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
    
  useEffect(() => {
    if (todos.length > 0) {
      showNotification('showTodoTotal', { todosPending });
    }
  }, []);
    
  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    };
        
    dispatch(action);
    showNotification('showTodoAdded');
  };
    
  const handleDeleteTodo = ( id ) => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: id
    };
        
    dispatch(action);
    showNotification('showTodoRemoved');
        
  };

  const handleTogleTodo = ( id ) => {
    const action = {
      type: '[TODO] Togle Todo',
      payload: id
    };

    dispatch(action);
  };

  return {
    todos,
    todoAll: todos.length,
    todoPending: todosPending,
    handleNewTodo,
    handleDeleteTodo,
    handleTogleTodo
  };

};
