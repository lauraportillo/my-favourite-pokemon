import React from 'react';

const Pokemon = (props) => {
  //LE METEMOS UN EVENTO
  const handleClick = (ev) => {
    props.handlePokemon(props.pokemon.id);
  };

  const pokeTypes = props.pokemon.types.map((type, index) => {
    return (
      <li key={index} className={`poke__type poke__type--${type}`}>
        {type}
      </li>
    );
  });
  return (
    <article className="pokeCard" id={props.pokemon.id} onClick={handleClick}>
      <img src={props.pokemon.url} alt={props.pokemon.name} />
      <div className="pokeDescription">
        <h2 className="pokeTitle"> {props.pokemon.name} </h2>
        <ul className="pokeTypes">{pokeTypes}</ul>
      </div>
    </article>
  );
};

export default Pokemon;
