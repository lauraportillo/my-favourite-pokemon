import React, { useState, useEffect } from 'react';
import Header from './Header';
import Spinner from './Spinner';
import Favorite from './Favorite';
import Form from './Form';
import ResetButton from './ResetButton';
import PaginationButtons from './PaginationButtons';
import PokeList from './PokeList';
import Footer from './Footer';
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';
import { getAllPokemon, getPokemon } from '../services/getDataFromApi';

const App = () => {

  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';
  const [fav, setFav] = useState({});
  const [name, setName] = useState('');
  const [username, SetUsername] = useState('');

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async data => {
    let pokeData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(pokeData);
  }

  // Function that handles my favourite pokemon
  const handlePokemon = (clickedId) => {
    const pokemonSelected = pokemonData.find((pokemon) => {
      return pokemon.id === clickedId;
    });

    setFav(pokemonSelected);
  };

  // Function that handles changes in the inputs
  const handleName = (inputChange) => {
    if (inputChange.key === 'username') {
      SetUsername(inputChange.value);
    }
  };

  const handleReset = () => {
    SetUsername('');
    setFav({});
  };

  // Sorted alphabetically from a to z
  // pokemonData.sort((a, z) => a.name.localeCompare(z.name));

  return (
    <div className="containerBody">
      <Header />
      <main className="containerMain">
        <Favorite username={username} pokemon={fav} />
        <div className="containerForm">
          <div className="containerForm__form">
            <Form name={name} username={username} handleName={handleName} />
            <ResetButton handleReset={handleReset} />
          </div>
          <h3 className="subtitle"> and choose your favorite one!</h3>
        </div>

        <PaginationButtons prev={prev} next={next} />

        {loading && <Spinner />}

        <PokeList pokemons={pokemonData} handlePokemon={handlePokemon} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
