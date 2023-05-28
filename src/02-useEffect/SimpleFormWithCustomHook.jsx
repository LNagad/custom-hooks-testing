import { useEffect } from 'react';

import { Message } from './Message';
import { useForm } from './hooks/useForm';


export const SimpleFormWithCustomHook = () => {

  const { formState, onChangeInput, onResetBtn} = useForm({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formState;

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />
      <form >

        {/* { (username === 'LNagad') && <Message /> } */}
        <input 
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value={ username } 
          onChange={ onChangeInput }
        />

        <input 
          type="email"
          className="form-control mt-2"
          placeholder="maycol@gmail.com"
          name="email"
          value={ email }
          onChange={ onChangeInput } 
        />

        <input 
          type="password"
          className="form-control mt-2"
          placeholder="type your password"
          name="password"
          value={ password }
          onChange={ onChangeInput } 
        />

        <button onClick={ onResetBtn } className='btn btn-primary mt-2'>Reset</button>
      </form>
    </>
  );
};
