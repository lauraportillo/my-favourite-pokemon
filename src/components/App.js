import React, { useState } from 'react';
import PokeList from './PokeList';
import '../stylesheets/App.css';
import data from '../data/data.json';

const App = () => {
  const [pokemons] = useState(data);
  // en este array guardamos mis pokemons preferidos
  const [favs, setFavs] = useState([]);

  const handlePokemon = (clickedId) => {
    const favPokemonIndex = favs.findIndex((fav) => {
      return fav.id === clickedId;
    });

    if (favPokemonIndex === -1) {
      const pokemonClicked = pokemons.find((pokemon) => {
        return pokemon.id === clickedId;
      });
      favs.push(pokemonClicked);
      setFavs([...favs]);
    } else {
      favs.splice(favPokemonIndex, 1);
      setFavs([...favs]);
    }
  };

  return (
    <div className="container">
      <section>
        <h1 className="principalTitle"> Mi lista de Pokemon</h1>
        <PokeList pokemons={pokemons} handlePokemon={handlePokemon} />
      </section>
      <section>
        <h1 className="principalTitle"> Mis Pokemons favoritos</h1>
        <PokeList pokemons={favs} handlePokemon={handlePokemon} />
      </section>
    </div>
  );
};

export default App;
