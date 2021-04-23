import React, { useState } from 'react';
import Header from './Header';
import Favorite from './Favorite';
import Form from './Form';
import PokeList from './PokeList';
import Footer from './Footer';
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';
import data from '../data/data.json';

const App = () => {
  //estados
  const [pokemons] = useState(data);
  const [favs, setFavs] = useState([]);
  const [name, setName] = useState('');

  //definición de la función que maneja los pokemons preferidos
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

  //definición de la función que maneja los cambios en los inputs
  const handleName = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    }
  };

  const handleReset = () => {
    setName('');
  };

  // ordenado alfabéticamente de la a a la z
  pokemons.sort((a, z) => a.name.localeCompare(z.name));

  return (
    <div className="containerBody">
      <Header />
      <main className="containerMain">
        <Favorite name={name} pokemons={favs} />
        <Form name={name} handleName={handleName} handleReset={handleReset} />
        <section>
          <PokeList pokemons={favs} handlePokemon={handlePokemon} />
        </section>
        <section>
          <PokeList pokemons={pokemons} handlePokemon={handlePokemon} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
