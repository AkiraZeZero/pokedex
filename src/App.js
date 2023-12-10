import React, { useState, useEffect } from "react";
import PokemonList from "./Components/PokemonList";
import Pages from "./Components/Pages";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPgUrl, setCurrentPgUrl] = useState("https://pokeapi.co/api/v2/pokemon")

  useEffect(() => {
    axios.get(currentPgUrl).then((res) => {
      setPokemon(res.data.results.map((p) => p.name));
    });
  }, [currentPgUrl]);

  return <PokemonList pokemon={pokemon} />;
}

export default App;
