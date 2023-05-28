import { useState } from 'react';

export const useCounter = (value = 10) => {

  const [counter, setCounter] = useState(value);

  const increment = ( value = 1) => {
    setCounter( (current) => current + value );
  };

  const decrement = ( value = 1 ) => {

    // if (counter === 0) return;
    if ((counter - value) < 0) return;
    setCounter( (current) => current - value );
  };

  const reset = () => {
    setCounter( value );
  };

  return {
    counter,
    increment,
    decrement,
    reset
  };
};