import PropTypes from 'prop-types';

export const TodoItem = ( { todo = {}, onDeleteTodo, onTogleTodo } ) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span 
        aria-label='span'
        onClick={ () => onTogleTodo(todo.id) } 
        className={ `align-self-center ${ (todo.done) 
          ? 'text-decoration-line-through' : ''}`}
      >
        { todo.description }
      </span>
      <button 
        className='btn btn-danger'
        onClick={ () => onDeleteTodo(todo.id) }
      >Borrar
      </button>
    </li>
  );
};


TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onTogleTodo: PropTypes.func.isRequired,
};