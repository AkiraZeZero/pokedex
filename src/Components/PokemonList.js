import React from "react";

export default function PokemonList({ pokemon }) {
// props.pokemon
// Pokemon is our prop, easier to use just pokemon
    return(
// we get to name things whatever we want, p = pokemon
        <div>
{/* show a list of our pokemon in a div */}
            {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}