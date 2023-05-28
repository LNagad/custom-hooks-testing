import { useEffect, useState } from 'react';

import { Message } from './Message';


export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'LNagad',
    email: 'maycolforbusness@gmail.com'
  });

  const { email, username } = formState;


  const onChangeInput = ( { target } ) => {
    const { value, name } = target;
    // console.log({ value, name });
    setFormState({
      ...formState,
      [ name ]: value
    });
  };

  useEffect(() => {
    // console.log('Use effect triggered!');
  }, []); //Empty means trigger It when the component is mount
    
  useEffect(() => {
    // console.log('formState effect triggered!');
  }, [formState]); //Empty means trigger It when the component is mount
    
  useEffect(() => {
    // console.log('Email effect triggered!');
  }, [email]); //Empty means trigger It when the component is mount
    

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />
      <form >

        { (username === 'LNagad') && <Message /> }
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
      </form>
    </>
  );
};
