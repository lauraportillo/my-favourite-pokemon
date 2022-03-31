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
import { getAllPokemon, getPokemon } from '../services/getDataFromApi';

const App = () => {

  const [pokemons] = useState(data);
  const [fav, setFav] = useState({});
  const [name, setName] = useState('');

  //usando la api:
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  // useEffect
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
      //borrar
      console.log(response);
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
    console.log(data.results);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
    console.log(data.results);
  }

  const loadingPokemon = async datas => {
    let pokemonDatas = await Promise.all(
      datas.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(pokemonDatas);
  }
  //borrar
  console.log(pokemonData);


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


        <div>
          <button onClick={prev}>previous</button>
          <button onClick={next}>next</button>
        </div>

        <PokeList pokemons={pokemons} handlePokemon={handlePokemon} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
