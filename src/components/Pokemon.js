import '../stylesheets/Pokemon.scss';

const Pokemon = ({ pokemon, handlePokemon }) => {
  const handleClick = (ev) => {
    handlePokemon(pokemon.id);
  };

  const pokeTypes = pokemon.types.map((type, index) => {
    return (
      <li key={index} className={`poke__type poke__type--${type}`}>
        {type.type.name}
      </li>
    );
  });

  return (
    <article className="pokeCard" id={pokemon.id} onClick={handleClick}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="pokeDescription">
        <h2 className="pokeTitle"> {pokemon.name} </h2>
        <ul className="pokeTypes">{pokeTypes}</ul>
      </div>
    </article>
  );
};

export default Pokemon;
