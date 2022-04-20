import Pokemon from './Pokemon';
import '../stylesheets/PokeList.scss';
import PokemonNotFound from './PokemonNotFound';

const PokeList = ({ pokemons, handlePokemon }) => {

  const renderPokemon = () => {
    if (pokemons.length === 0) {
      return <PokemonNotFound />;
    } else {
      return pokemons.map((pokemon) => {
        return (
          <li key={pokemon.id.toString()}>
            <Pokemon pokemon={pokemon} handlePokemon={handlePokemon} />
          </li>
        );
      });
    }
  }

  return (
    <div >
      <ul className="pokeList">{renderPokemon()}</ul>
    </div>
  );
};

export default PokeList;

