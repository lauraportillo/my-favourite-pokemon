import React, { useState, useEffect } from 'react';
import Header from './Header';
import Favorite from './Favorite';
import Form from './Form';
import ResetButton from './ResetButton';
import PokeList from './PokeList';
import Footer from './Footer';
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';
import data from '../data/data.json';
import { getAllPokemon } from '../services/getDataFromApi';

const App = () => {

  const [pokemons] = useState(data);
  const [fav, setFav] = useState({});
  const [name, setName] = useState('');

  //usando la api:
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [loading, setLoading] = useState(true);
  const initialPage = 'https://pokeapi.co/api/v2/pokemon';

  // useEffect
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialPage);
      setNextPage(response.next);
      setPrevPage(response.previous);
      setLoading(false);

      console.log(response);
    }
    fetchData();
  }, []);




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
          <div className="containerForm__form">
            <Form name={name} handleName={handleName} />
            <ResetButton handleReset={handleReset} />
          </div>
          <h3 className="subtitle"> and choose your favorite one!</h3>
        </div>
        <div>{loading ? <h1>Loading...</h1> : <h1>Data is fetched</h1>}</div>

        <PokeList pokemons={pokemons} handlePokemon={handlePokemon} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
