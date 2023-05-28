import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const HomePage = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Home Page {user?.name}</h1>
      <hr />


      <pre 
        aria-label='pre'
        className='fs-3'>
        { JSON.stringify(user, null, 3) }
      </pre>
    </>
  );
};
