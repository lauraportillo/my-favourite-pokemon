import React from 'react';

const Pokemon = (props) => {
  const pokeTypes = props.pokemon.types.map((type, index) => {
    return <li key={index}>{type}</li>;
  });
  return (
    <div>
      <h2>Soy un Pokemon</h2>
    </div>
  );
};

export default Pokemon;
