function PokemonCard({ name, image }) {
  const pokemons =
    <figure>
    <h2>Bulbasaur</h2>
    <figcaption>{name} {image}</figcaption>
    </figure>;
  
  return ( 
  <>
    <figure>
    <h2>???</h2>
    <figcaption>{name} {image}</figcaption>
      </figure>
    </>
      )
}
  


export default PokemonCard;

