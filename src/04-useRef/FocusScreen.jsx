import { useRef } from 'react';

export const FocusScreen = () => {

  const inputRef = useRef();

  const onClickBtn = () => {
    inputRef.current.select();
  };

  return (
    <>
      <input type="text"
        ref={ inputRef }
        className="form-control" 
        placeholder="type your name"
      /> 

      <button 
        className="btn btn-primary mt-2"
        onClick={ onClickBtn }>Set focus screen

      </button>
    </>
  );
};
