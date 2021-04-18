import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';

const PokeList = (props) => {
  const renderPokemon = props.pokemons.map((pokemon) => {
    return (
      <li key={pokemon.id.toString()}>
        <Pokemon pokemon={pokemon} handlePokemon={props.handlePokemon} />
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

// handlePokemon={props.handlePokemon} es la unión del lifting entre App y Pokemon
