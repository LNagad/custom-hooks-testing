
import PropTypes from 'prop-types';

export const PokemonCard = ({sprites, name, abilities}) => {
  return (
    <div className='card col-lg-2 offset-lg-5'>
      <div className='card-header'>
        <img className='img-cardX' src={sprites} alt={name} />
      </div>
      <div className='card-body'>
        <p>{ name }</p>
      </div>
      <div className='card-footer d-flex justify-content-between'>
        {
          abilities.map( ({ name }) => (<h6 key={name}>{ name }</h6>))
        }
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  sprites: PropTypes.array.isRequired,
  abilities: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};