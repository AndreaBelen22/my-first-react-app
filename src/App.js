import './App.css';
import Title from './components/Title'
import Pokemon from "./components/Pokemon"
import React from "react";
import LikeCounter from "./components/LikeCounter"
import AwesomeAnimals from "./components/AwesomeAnimals"
import ArticleList from "./components/ArticleList"


 const allPokemons = [
    {
  name: "Charizard",
  weight:"90Kg",
  awesome: true,
  terrifying: false,
  abilities: ('blaze','Solar Power','Tough claws', 'Drought')},
  {
    name: "Bulbasaur",
  weight:"6.9Kg",
  awesome: true,
  terrifying: false,
  abilities: ('overgrow','Chlorophyll')
  },
  {
    name: "Mewtwo",
  weight:"122Kg",
  awesome: true,
  terrifying: true,
  abilities: ('Pressure', 'Unnerve', 'Steadfast', 'Insomnia')
  },
  {
    name: "Mega beedrill",
  weight:"65kg",
  awesome: false,
  terrifying: true,
  abilities: ('Intimidate', 'Unnerve')
  },
  {name: "TeoG",
  weight:"70",
  awesome: false,
  terrifying: true,
  abilities: ('Intimidate', 'Bossing around')}
  ]
  
  


function App() {
    return (
        <div className="App">
            <main>
                <Title/>
                {allPokemons.map((pokemon, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <Pokemon 
          name={pokemon.name} 
          weight={pokemon.weight} 
          awesome={pokemon.awesome} 
          terrifying={pokemon.terrifying}
          abilities={pokemon.abilities}
          />
        </div> ))}
        <LikeCounter />
        <AwesomeAnimals/>
        <div>
        <h3>Here are some articles for you</h3>
        <ArticleList />
    </div>
            </main>
        </div>
    );
}

export default App;

