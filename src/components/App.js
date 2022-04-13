import React, { useState } from 'react';
import { usePokemon } from '../hooks/usePokemon';
import Header from './Header';
import Spinner from './Spinner';
import Favorite from './Favorite';
import Form from './Form';
import PaginationButtons from './PaginationButtons';
import PokeList from './PokeList';
import Footer from './Footer';
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';


const App = () => {

  const { isLoading, pokemons } = usePokemon();

  const [fav, setFav] = useState({});
  const [name, setName] = useState('');
  const [username, setUsername] = useState(''); 


  // Function that handles changes to inputs and identifies which input the change is being made to.
  const handleFilter = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    }
  }
  // Filter
  const filterPokemons = pokemons
    .filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(name.toLowerCase());
    })

  // Function that handles my favourite pokemon
  const handlePokemon = (clickedId) => {
    const pokemonSelected = pokemons.find((pokemon) => {
      return pokemon.id === clickedId;
    });

    setFav(pokemonSelected);
  };

  // Function that handles changes in the inputs
  const handleName = (inputChange) => {
    if (inputChange.key === 'username') {
      setUsername(inputChange.value);
    }
  };

  const handleReset = () => {
    setName('');
    setUsername('');
    setFav({});
  };

  // Sorted alphabetically from a to z
  // pokemons.sort((a, z) => a.name.localeCompare(z.name));

  return (
    <div className="containerBody">
      <Header />
      <main className="containerMain">
        <Favorite username={username} pokemon={fav} />
        <Form name={name} handleFilter={handleFilter} username={username} handleName={handleName} handleReset={handleReset} />
        <h3 className="subtitle"> choose your favorite one!</h3>
        {/* <PaginationButtons prev={prev} next={next} /> */}
        <PaginationButtons />
        {isLoading && <Spinner />}
        <PokeList pokemons={filterPokemons} handlePokemon={handlePokemon} />

      </main>
      <Footer />
    </div>
  );
};

export default App;
