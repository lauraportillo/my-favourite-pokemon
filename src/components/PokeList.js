import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const renderPokemon = props.pokemons.map((pokemon) => {
    return (
      <li key={pokemon.id} id={pokemon.id}>
        <Pokemon pokemon={pokemon} />
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
