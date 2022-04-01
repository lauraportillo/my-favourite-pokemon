import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';

const PokeList = ({ pokemons, handlePokemon }) => {
  const renderPokemon = pokemons.map((pokemon) => {
    return (
      <li key={pokemon.id.toString()}>
        <Pokemon pokemon={pokemon} handlePokemon={handlePokemon} />
      </li>
    );
  });
  return (
    <div className="pokeContainer">
      <ul className="pokeList">{renderPokemon}</ul>
    </div>
  );
};

export default PokeList;

