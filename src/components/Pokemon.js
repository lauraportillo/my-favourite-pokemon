import React from 'react';

const Pokemon = (props) => {
  const pokeTypes = props.pokemon.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <article className="pokeCard">
      <img src={props.pokemon.url} alt={props.pokemon.name} />
      <div className="pokeDescription">
        <h2 className="pokeTitle"> {props.pokemon.name} </h2>
        <ul className="pokeTypes">{pokeTypes}</ul>
      </div>
    </article>
  );
};

export default Pokemon;
