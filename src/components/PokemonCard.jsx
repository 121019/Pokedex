import React from 'react'
import ReactDOM from 'react-dom'



    
function PokemonCard({ pokemon, image }) {
  console.log(props);

  // const pokemon = pokemonList[0];
  // const image = !!pokemon.image;
  // const pokemonList = [ 
  // { name: "Bulbasaur", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" },
  // { name: " ", image: " " }
  //];
  return (
    <figure>
      {image ? (
        <img src={pokemon.image} alt={`Pokemon ${pokemon.name}`} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}


export default PokemonCard;

