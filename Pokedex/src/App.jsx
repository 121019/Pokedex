
import './App.css'
import PokemonCard from './components/PokemonCard.jsx'
import {useState} from "react"
import react from 'react'
import ReactDOM from 'react-dom'



const pokemonList = [ 
    {name: "Bulbasaur", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"},
    {name: "Mew", imgSrc: "" },
    {name: "charmander",imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"},
    {name: "squirtle",imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"},
    {name: "pikachu", imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"},
//Pour liste pokemon
  ];   

function App() {
 //Pour suivant-precedent
  const [photo, setPhoto] = useState(0)//Stock
  
  const handleNextClick = () => {
    setPhoto(photo + 1);
  }
  const handlePreviewClick = () => {
    setPhoto(photo - 1);
  }
    
  return (//Pour suivant-precedent
    <div>
      <PokemonCard pokemon={pokemonList[photo]} />
      <div>
        <button onClick={handlePreviewClick} disabled={photo === 0}>Précédent</button>
        <button onClick={handleNextClick} disabled={photo === pokemonList.length - 1}> Suivant</button>
      </div >
    </div>
  )
}

  export default App;




