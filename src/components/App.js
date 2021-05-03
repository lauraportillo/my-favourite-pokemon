import React, { useState } from 'react';
import Header from './Header';
import Favorite from './Favorite';
import Form from './Form';
import ResetButton from './ResetButton';
import PokeList from './PokeList';
import Footer from './Footer';
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';
import data from '../data/data.json';

const App = () => {
  //estados
  const [pokemons] = useState(data);
  const [fav, setFav] = useState({});
  const [name, setName] = useState('');

  //definición de la función que maneja el pokemon preferido
  const handlePokemon = (clickedId) => {
    const pokemonSelected = pokemons.find((pokemon) => {
      return pokemon.id === clickedId;
    });

    setFav(pokemonSelected);
  };

  //definición de la función que maneja los cambios en los inputs
  const handleName = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    }
  };

  const handleReset = () => {
    setName('');
    setFav({});
  };

  // ordenado alfabéticamente de la a a la z
  pokemons.sort((a, z) => a.name.localeCompare(z.name));

  return (
    <div className="containerBody">
      <Header />
      <main className="containerMain">
        <Favorite name={name} pokemon={fav} />
        <div className="containerForm">
          <Form name={name} handleName={handleName} />
          <ResetButton handleReset={handleReset} />
        </div>
        <h3 className="subtitle"> and choose your favorite one!</h3>
        <PokeList pokemons={pokemons} handlePokemon={handlePokemon} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
