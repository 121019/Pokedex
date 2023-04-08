import PropTypes from "prop-types"



function pokemonCard({ pokemon }) {
  const { name, imgSrc } = pokemon;
  return (
    
      <figure>
          <img src={imgSrc}  alt={name} />
          <figcaption>{name}</figcaption>
      </figure>
  )
}

pokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired, 
}


export default pokemonCard

