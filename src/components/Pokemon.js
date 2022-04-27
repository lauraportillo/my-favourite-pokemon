import '../stylesheets/Pokemon.scss';
import image from '../images/pokemonBallBlue100.png';

const Pokemon = ({ pokemon, handlePokemon }) => {
  const handleClick = (ev) => {
    handlePokemon(pokemon.id);
  };

  const pokeTypes = pokemon.types.map((type, index) => {
    return (
      <li key={index} className={`poke__type poke__type--${type}`}>
        <p className="poke__type">{type.type.name}</p>
      </li>
    );
  });

  return (
    <article className="pokeCard" id={pokemon?.id} onClick={handleClick}>
      <div className="pokeCard__imgContainer">
        {pokemon?.pic === null ? <img className="pokeCard__imgContainer--null" src={image} alt={pokemon?.name} /> : <img className="pokeCard__imgContainer--item" src={pokemon?.pic} alt={pokemon?.name} />}
      </div>

      <div className="pokeDescription">
        {pokemon.name.length <= 10 ? <h2 className="pokeTitle"> {pokemon?.name} </h2> : <h2 className="pokeTitleSmaller"> {pokemon?.name} </h2>}
        <ul className="pokeTypes">{pokeTypes}</ul>
        {<p className="pokeSubtitle">{pokemon?.id}</p>}

      </div>
    </article>
  );
};

export default Pokemon;
