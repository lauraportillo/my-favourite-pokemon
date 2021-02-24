import React from 'react';

const Pokemon = (props) => {
  const pokeTypes = props.pokemon.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <article className="pokeCard">
      <img src={props.pokemon.url} alt={props.pokemon.name} />
      <div>
        <h2 className="pokeTitle"> {props.pokemon.name} </h2>
        <ul>{pokeTypes}</ul>
      </div>
    </article>
  );
};

export default Pokemon;
