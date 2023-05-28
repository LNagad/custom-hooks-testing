import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

import { useForm }  from '../hooks';

export const TodoAdd = ( { onNewTodo } ) => {

  const { formState, onChangeInput, onResetBtn} = useForm({
    description: ''
  });

  const { description } = formState;
    
  const onFormSubmit = ( event ) => {
    event.preventDefault();
        
    if ( description.length < 5) {
      toast.error('Todo length debe ser mayor a 5.');
      return;
    }
        
    onNewTodo({
      id: new Date().getTime() * 1,
      description,
      done: false
    });

    onResetBtn();
  };

  return (
    <form aria-label='form' onSubmit={ onFormSubmit }>
      <input type="text"
        aria-label='descriptionInput'
        className='form-control' 
        placeholder='Que hay que hacer?'
        value={ description }
        name='description'
        onChange={ onChangeInput }
      />

      <button aria-label='formSubmitBtn' type='submit'
        className='btn btn-outline-primary float-end mt-2'
      >Agregar
      </button>
    </form>
  );
};


TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired
};