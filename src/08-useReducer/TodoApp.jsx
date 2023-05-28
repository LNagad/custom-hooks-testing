import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { todoReducer, TodoList, TodoAdd, useTodo } from './index';

export const TodoApp = () => {

  const { 
    todos, 
    handleNewTodo, 
    handleDeleteTodo, 
    handleTogleTodo,
    todoAll,
    todoPending
  } = useTodo(todoReducer);
    
  return (
    <>
      <h1>TodoApp ({todoAll}), <small>pendientes ({todoPending})</small> </h1>
      <hr />

      <Toaster
        position='top-center'
      />

      <ToastContainer
        position='top-right' 
      />

      <div className="row"> 
        <div className="col-7">
          <TodoList 
            todos={ todos } 
            onDeleteTodo={ handleDeleteTodo }
            onTogleTodo={ handleTogleTodo } 
          />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={ handleNewTodo } />
        </div>
      </div> 
    </>
  );
};
