import React, { useState } from 'react';
import Header from './Header';
import Favorite from './Favorite';
import PokeList from './PokeList';
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';
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

  // ordenado alfabéticamente de la a a la z
  pokemons.sort((a, z) => a.name.localeCompare(z.name));

  return (
    <body className="container">
      <Header />
      <main>
        <Favorite />
        <section>
          <PokeList pokemons={favs} handlePokemon={handlePokemon} />
        </section>
        <section>
          <PokeList pokemons={pokemons} handlePokemon={handlePokemon} />
        </section>
      </main>
    </body>
  );
};

export default App;
