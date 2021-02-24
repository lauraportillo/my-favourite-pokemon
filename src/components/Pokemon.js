import React from 'react';

const Pokemon = (props) => {
  const pokeTypes = props.pokemon.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <article>
      <img src={props.pokemon.url} alt={props.pokemon.name} />
      <h2> {props.pokemon.name} </h2>
      <ul>{pokeTypes}</ul>
    </article>
  );
};

export default Pokemon;
