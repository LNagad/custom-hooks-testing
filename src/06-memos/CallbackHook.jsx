
import { useCallback, useEffect, useState } from 'react';

import { IncrementCallback } from './IncrementCallback';

export const CallbackHook = () => {

  const [ counter, setCounter ] = useState(100);

  //   const incrementFather = useCallback(
  //     () => {
    
  //       setCounter( e => e + 1);
  //     },
  //     [],
  //   );

  //* Con parametros enviados desde un callback
  const incrementFather = useCallback(
    value => {
    
      setCounter( e => e + value);
    },
    [],
  );

  //   useEffect( () => {
  //     incrementFather();
  //   }, [incrementFather]);
    

  return (
    <>
      <h1>Counter:  <small>{ counter }</small> </h1>
      <hr />

      <IncrementCallback increment={ incrementFather } />
    </>
  );
};
