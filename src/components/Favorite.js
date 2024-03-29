import '../stylesheets/Favorite.scss';
import image from '../images/pokemonBall.png';

const Favorite = ({ username, pokemon }) => {


  return (
    <div className="containerFav">
      <div className="fav">
        <div className="fav__star">
          <img className="fav__star--image" src={pokemon?.pic || image} alt="my favorite pokemon" />
        </div>
        <div className="fav__text">
          <span className="fav__text--username">{username || 'Full Name'}</span>
          <span className="fav__text--favPoke">{pokemon.name || 'Favorite Pokemon'}</span>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
