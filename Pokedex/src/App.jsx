
import './App.css'
import PokemonCard from './components/PokemonCard.jsx'
import {useState} from "react"
import { useEffect } from 'react'


const pokemonList = [ 
    {name: "Bulbasaur", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"},
    {name: "Mew", imgSrc: "src/assets/Mew.png" },
    {name: "charmander",imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"},
    {name: "squirtle",imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"},
    {name: "pikachu", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"},
//Pour liste pokemon
]; 
 

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(pokemonList[0]);

  useEffect(() => {
    alert('Hello Pokemon Trainer');
  }, []);

  useEffect(() => {
    if (selectedPokemon.name === 'Pikachu') {
      alert('Pika Pikachu!!!');
    }
  }, [selectedPokemon]);

  const handlePokemonButtonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const Navbar = () => {
    return (
      <nav>
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => handlePokemonButtonClick(pokemon)}>
            {pokemon.name}
          </button>
        ))}
      </nav>
    );
  };

  return (
    <div>
      <Navbar />
      <PokemonCard pokemon={selectedPokemon} />
    </div>
  );
}

export default App;