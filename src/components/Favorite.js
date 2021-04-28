import React from 'react';
import '../stylesheets/Favorite.scss';
import image from '../images/pokemonBall.png';

const Favorite = (props) => {
  return (
    <div className="containerFav">
      <div className="fav">
        <div className="fav__star">
          <img className="fav__star--image" src={image} alt="my favorite pokemon" />
        </div>
        <div className="fav__text">
          <span>{props.name || 'Full Name'}</span>
          <span className="fav__text--favPoke">{/*props.pokemons.name ||*/ 'Favorite Pokemon'}</span>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
