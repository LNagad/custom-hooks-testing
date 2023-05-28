import { useEffect, useState } from 'react';

export const useFetch = ( url ) => {
	
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  });

  const getFetch = async () => {

    setState({
      ...state,
      isLoading: true
    });

    const resp = await fetch(url);

    const result = await resp.json();

    const data = {
      name: result.name,
      order: result.order,
      abilities: result?.abilities?.map(p => ({
        ...p.ability
      })),
      sprites: result.sprites.other.dream_world.front_default
    };
          
    setState({
      data,
      isLoading: false,
      hasError: null
    });

  };


  useEffect(() => {
        
    getFetch();
	
  }, [url]);


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError:state.hasError,
  };
};
