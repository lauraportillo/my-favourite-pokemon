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
  const [currentPage, setCurrentPage] = useState(0);
  const [fav, setFav] = useState({});
  const [name, setName] = useState('');
  const [username, setUsername] = useState(''); 

  const paginatedPokemons = () => {
    if (name.length === 0) {
      return pokemons.slice(currentPage, currentPage + 8);
    }
    const filtered = pokemons.filter(poke => poke.name.includes(name));
    return filtered.slice(currentPage, currentPage + 8);
  }

  const next = () => {
    if (pokemons.filter(poke => poke.name.includes(name)).length > currentPage + 8) {
      setCurrentPage(currentPage + 8);
    }
  }

  const prev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 8);
    }
  }

  // Function that handles changes to inputs and identifies which input the change is being made to.
  const handleFilter = (inputChange) => {
    if (inputChange.key === 'name') {
      setCurrentPage(0);
      setName(inputChange.value);
    }
  }
  // Filter
  const filterPokemons = paginatedPokemons()
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
    setCurrentPage(0);
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
        <PaginationButtons prev={prev} next={next} />
        {isLoading && <Spinner />}
        <PokeList pokemons={filterPokemons} handlePokemon={handlePokemon} />

      </main>
      <Footer />
    </div>
  );
};

export default App;
