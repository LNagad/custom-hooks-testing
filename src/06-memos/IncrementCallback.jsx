import React from 'react';
import PropTypes from 'prop-types';



export const IncrementCallback = React.memo(({ increment }) => {

  console.log('Me renderize de nuevo');
  return (
    <>
      <button
        onClick={ () => increment( 5 ) }
        className='btn btn-primary'
      >Increment
      </button> 
    </>
  );
}
);


IncrementCallback.propTypes = {
  increment: PropTypes.func.isRequired
};

IncrementCallback.displayName = 'IncrementCallback';