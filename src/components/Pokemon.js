import React from "react";

export default function Pokemon(props) {
  return (
    <div>
      <h2>Pokemon name: {props.name}</h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "YES!" : "nope, not really"}</p>
      <p>Terrifying: {props.terrifying ? "Very" : "nah, lovable"}</p>
      <p>Abilities: {props.abilities}</p>
    </div>
  );
}

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
}
]

