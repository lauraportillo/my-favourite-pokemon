import React from 'react';
import '../stylesheets/Favorite.scss';
import image from '../images/pokemonBall.png';

const Favorite = (props) => {
  return (
    <div className="containerFav">
      <div className="fav">
        <div className="fav__star">
          <img className="fav__star--image" src={image} alt="pokeball" />
          {/* <span className="fav__star--image">Holi!!</span> */}
        </div>
        <div className="fav__text">
          <span className="fav__text--line">{props.name || 'Nombre Apellidos'}</span>
          <span className="fav__text--line">would be</span>
          {/* ver cómo meter nombre e imagen de pokemon seleccionado */}
          <span className="fav__text--line myPoke">{props.pokemons.name || 'Favorite Pokemon'}</span>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
