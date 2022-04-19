import '../stylesheets/Pokemon.scss';

const Pokemon = ({ pokemon, handlePokemon }) => {
  const handleClick = (ev) => {
    handlePokemon(pokemon.id);
  };

  // const pokeTypes = pokemon.types.map((type, index) => {
  //   return (
  //     <li key={index} className={`poke__type poke__type--${type}`}>
  //       {type.type.name}
  //     </li>
  //   );
  // });

  const rederPokemonImage = () => {
    if (pokemon.id !== '10158') {
      return (
        <img className="pokeCard__imgContainer--item" src={pokemon?.pic} alt={pokemon?.name} />
      )
    }
    if (pokemon.id === '10158') {
      return (
        <img src="../images/pokemonLogo.png" alt={pokemon?.name} />
      )
    }
  }



  return (
    <article className="pokeCard" id={pokemon?.id} onClick={handleClick}>
      <div className="pokeCard__imgContainer">
        {/* <img className="pokeCard__imgContainer--item" src={pokemon?.pic} alt={pokemon?.name} /> */}
        {rederPokemonImage()}
      </div>

      <div className="pokeDescription">
        {pokemon.name.length <= 10 ? <h2 className="pokeTitle"> {pokemon?.name} </h2> : <h2 className="pokeTitleSmaller"> {pokemon?.name} </h2>}
        {<p className="pokeSubtitle">{pokemon?.id}</p>}
        {/* <ul className="pokeTypes">{pokeTypes}</ul> */}
      </div>
    </article>
  );
};

export default Pokemon;
