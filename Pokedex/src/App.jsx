
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
 
  const [photo, setPhoto] = useState(0);

  useEffect(() => {
    alert('Hello Pokemon Trainer') 
    }, []);


  useEffect(() => {
    if (pokemonList[photo].name === 'pikachu') {
      alert('Pika Pikachu !!!');
    }
  }, [photo]);


  function handleNextClick() {
    setPhoto(photo + 1);
  }

  const handlePreviewClick = () => {
    setPhoto(photo - 1);
  };

  const Navbar = () => { 
    return(
    <nav>
      <button onClick={handlePreviewClick} disabled={photo === 0}>Précédent</button>
      <button onClick={handleNextClick} disabled={photo === pokemonList.length - 1}>Suivant</button>
    </nav>
        );
        }

  return (
    <div>
      <Navbar />
      <PokemonCard pokemon={pokemonList[photo]} />
    </div>
  );
  }

export default App;




