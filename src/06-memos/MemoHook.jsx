import { useEffect, useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter';


const heavyStuff = ( iterationNumber = 100) => {

  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahi vamos...');
  }

  return `${ iterationNumber } iteraciones realizadas`;
};

export const MemoHook = () => {

  const { counter, increment } = useCounter(1000);
  const [show, setShow] = useState(true);

  //* Si queremos guardar un valor en memoria o una tarea
  //* y que solo se actualice dependiendo de cierto estado podemos hacerlo de 
  //* la siguiente manera
  //? Almacenamos el valor con el useState
  // const [memoValue, setMemoValue] = useState();
  
  //? Hacemos que el valor cambie solamente cuando se dispara la dependencia
  // const memorizedValue = useEffect( () => {
  //   const memoStateValue = heavyStuff(counter);
    
  //   setMemoValue(memoStateValue);
  // },  [counter]);

  //* O usar el hook useMemo el cual retorna un valor y se dispara solamente cuando 
  //*cambia la dependencia
  const memorizedValue = useMemo( () => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>Counter:  <small>{ counter }</small> </h1>
      <hr />

      <h4>{ memorizedValue }</h4>

      <button 
        className='btn btn-primary'
        onClick={ () => increment() }
      >
        +1
      </button>

      <button 
        className='btn btn-outline-primary'
        onClick={ () => setShow( !show ) }
      >
        Show/Hide { JSON.stringify(show) }
      </button>
    </>
  );
};
