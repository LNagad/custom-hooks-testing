
import { useCounter, useFetch } from '../hooks';
import { Loading } from './components/Loading';
import { PokemonCard } from './components/pokemonCard';


export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/'+counter);
    
  // const { name, sprites, abilities } = !!data && data;


  return (
    <>
      <h1>Pokemon API</h1>

      <hr />

      {
        ( isLoading )  
          ? <Loading /> 
          : <PokemonCard {...data} />
      }


      <button 
        className='btn btn-primary mt-4 col-12'
        aria-label='nextBtn'
        onClick={ () => increment() }
        disabled={ isLoading }
      >Next</button>
			
    </>
  );
};
